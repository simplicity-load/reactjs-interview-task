{ pkgs, ... }: {
  projectRootFile = "flake.nix";
  programs.prettier.enable = true;
  programs.nix-fmt.enable = true;
}
