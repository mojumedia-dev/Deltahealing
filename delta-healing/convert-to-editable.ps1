# Convert full HTML pages to section-wrapped editable format for Squarespace

$pages = @(
    @{Original="PAGE-About.html"; New="ABOUT-EDITABLE.html"; ID="dhs-about"},
    @{Original="PAGE-TMS-Therapy.html"; New="TMS-EDITABLE.html"; ID="dhs-tms"},
    @{Original="PAGE-Spravato.html"; New="SPRAVATO-EDITABLE.html"; ID="dhs-spravato"},
    @{Original="PAGE-Psychiatric-Evaluation.html"; New="PSYCH-EVAL-EDITABLE.html"; ID="dhs-psych-eval"},
    @{Original="PAGE-Medication-Management.html"; New="MED-MGMT-EDITABLE.html"; ID="dhs-med-mgmt"},
    @{Original="PAGE-ADHD-Cognitive-Testing.html"; New="ADHD-EDITABLE.html"; ID="dhs-adhd"}
)

foreach ($page in $pages) {
    Write-Host "Converting $($page.Original) → $($page.New)..." -ForegroundColor Cyan
    
    $content = Get-Content $page.Original -Raw
    
    # Remove DOCTYPE, html, head, body tags
    $content = $content -replace '<!DOCTYPE[^>]*>', ''
    $content = $content -replace '<html[^>]*>', ''
    $content = $content -replace '</html>', ''
    $content = $content -replace '<head[^>]*>', ''
    $content = $content -replace '</head>', ''
    $content = $content -replace '<body[^>]*>', ''
    $content = $content -replace '</body>', ''
    $content = $content -replace '<meta[^>]*>', ''
    
    # Extract style block
    if ($content -match '<style>(.*?)</style>') {
        $styles = $Matches[1]
        $content = $content -replace '<style>.*?</style>', ''
        
        # Scope all CSS to the section ID
        # Replace body { with #section-id {
        $styles = $styles -replace 'body\s*\{', "#$($page.ID) {"
        
        # Replace bare selectors with scoped selectors
        $styles = $styles -replace '(?m)^(\s*)(\*\s*\{)', "`$1#$($page.ID) $2"
        $styles = $styles -replace '(?m)^(\s*)(html\s*\{)', "`$1$2"  # Keep html as-is
        
        # Prefix other selectors
        $styles = $styles -replace '(?m)^(\s*)(\.[a-zA-Z])', "`$1#$($page.ID) `$2"
        $styles = $styles -replace '(?m)^(\s*)([a-z][a-z0-9]*\s*\{)', "`$1#$($page.ID) `$2"
        $styles = $styles -replace '(?m)^(\s*)([a-z][a-z0-9]*\s*,)', "`$1#$($page.ID) `$2"
        
        # Build final output
        $output = @"
<section id="$($page.ID)">
<style>
$styles
</style>

$content
</section>
"@
        
        $output | Set-Content $page.New -Encoding UTF8
        Write-Host "  ✓ Created $($page.New)" -ForegroundColor Green
    }
    else {
        Write-Host "  ✗ No <style> block found in $($page.Original)" -ForegroundColor Red
    }
}

Write-Host "`n✅ Conversion complete! All pages now editable in Squarespace." -ForegroundColor Green
Write-Host "Files created:" -ForegroundColor Yellow
$pages | ForEach-Object { Write-Host "  - $($_.New)" -ForegroundColor Yellow }
