<p align="center">
  <a href="https://github.com/ryankurte/action-apt/actions"><img alt="action-apt status" src="https://github.com/ryankurte/action-apt/workflows/build-test/badge.svg"></a>
</p>

# APT helper action

Helper action to apt-install packages on the local machine (only for use on `ubuntu-latest` runners)

```yaml
  - uses: ryankurte/action-apt@v0.2.0
    with: 
      packages: "libsqlite3-dev"
```
