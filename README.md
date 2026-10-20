# Mahin7773.github.io

Academic portfolio for Md. Mashrur Alam, served by GitHub Pages at https://mahin7773.github.io.

- `index.html`: page content (about, research, experience, projects, skills, CV)
- `assets/style.css`: academic theme (light by default, dark toggle)
- `assets/script.js`: project list, thesis repo link, theme toggle
- `cv/Mashrur_Alam_CV.pdf`: the CV offered as a download (not embedded)

## Updating the CV

1. Replace `cv/Mashrur_Alam_CV.pdf` with the new version, **keeping the same file name**.
2. Change the "Last updated" date in the CV section of `index.html` to the commit date.
3. Commit both files together and push.

## Thesis repository link

Set `THESIS_REPO` in `assets/script.js` to the repo's numeric ID (from `https://api.github.com/repos/Mahin7773/<repo-name>`) and its current name. The link is looked up by ID, so it keeps working if the repo is renamed.

## Adding a project

Add an entry to the `projects` array in `assets/script.js`. Set `repo` to the GitHub repository name, or `null` if the code isn't public.
