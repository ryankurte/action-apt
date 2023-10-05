<p align="center">
  <a href="https://github.com/ryankurte/action-apt/actions"><img alt="action-apt status" src="https://github.com/ryankurte/action-apt/workflows/build-test/badge.svg"></a>
</p>

# APT multi-arch helper action

A helper action to setup multiarch and install packages via `dpkg` and `apt-get`, because it's unfortunately complex to setup.
If you just need to install packages, use a `run: sudo apt-get install -y PACKAGES` step instead.

This patches the existing apt repositories on the system, adds the specified architecture via multiarch, adds a set of viable port repositories, and finally updates the cache and installs the specified packages.


```yaml
  - uses: ryankurte/action-apt@v0.4.0
    with:
      arch: armhf
      packages: "libsqlite3-dev:armhf"
```
