{ pkgs, unstable }:
with pkgs;
mkShell {
  buildInputs = [
    typescript
    unstable.nodejs_22
    unstable.pnpm
  ];

  shellHook = ''
    echo "Welcome to the SHELL!"
    git config core.hooksPath .hooks
  '';
}
