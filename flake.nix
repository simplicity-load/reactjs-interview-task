{
  description = "Go chat";

  inputs = {
    nixpkgs.url = "nixpkgs/nixos-23.11";
    nixpkgs-unstable.url = "nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    # treefmt-nix.url = "github:numtide/treefmt-nix";
  };

  outputs = { self, nixpkgs, nixpkgs-unstable, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        unstable = nixpkgs-unstable.legacyPackages.${system};
        # treefmtEval = treefmt-nix.lib.evalModule pkgs ./treefmt.nix;
      in {
        devShells.default = import ./shell.nix {
          inherit pkgs;
          inherit unstable;
        };
        # formatter = treefmtEval.config.build.wrapper;
        # checks = { formatting = treefmtEval.config.build.check self; };
      });
}
