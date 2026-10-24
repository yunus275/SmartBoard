# Aymen Schoolboard

Classroom whiteboard: drawing tools, 3D shapes, PDF, 2-player mode, Lucky Circle and Timer.

## Folders
- `src/` – the app (`app.html`) and the desktop wrapper (`electron/`)
- `public/` – static files (icon)
- `dist/` – built website (what gets published)

## Publish the website (Vercel)
1. Upload this folder to a GitHub repository.
2. On vercel.com choose **Add New > Project**, import the repository and press **Deploy**.
   Settings are already in `vercel.json` (output folder: `dist`).

## Get the Windows EXE
- **On GitHub (no install):** open the **Actions** tab > **Build Windows EXE** > **Run workflow**. Download `Aymen-Schoolboard-EXE` when it finishes.
- **On your PC:** install Node.js, double-click `build-exe.bat`, take `release/Aymen-Schoolboard.exe`.

## Edit
Change `src/app.html`, then run `npm run build` to refresh `dist/`.
