Planbox Themes
==============

Various project themes for Planbox

### In order to **create** a template from one of these themes:

1. Modify the constituent files in the theme folder (e.g., the shareabouts templates in the jstemplates folder)
2. Run the build script on the theme (e.g.: `./scripts/build shareabouts-bikeparking`)
3. Copy the contents of the *project.json* file in the theme folder.
4. Log in to Planbox as admin (through the Django Admin).
5. Navigate to */api/v1/projects*.
6. Paste the contents from the *project.json* file into the "Raw data" box at the bottom of the page and click "PUT".

### In order to **update** a template:

(Follow steps 1-4 as above, and then)

5. Navigate to */admin/planbox_data/project/* and find the project template you want to update.
6. Click the "API URL" for the project.
7. Paste the contents from the *project.json* file into the "Raw data" box at the bottom of the page and click "PUT".
