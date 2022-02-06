# MDN-Rust-Wasm

## Setup
```shell
cargo install wasm-pack
```

## Build
```shell
# In /rust
wasm-pack build --scope <npm_user_name>
```

## Publish
```shell
# In /rust/pkg
npm publish --access=public
```

## Run
```shell
# In /site
npm run serve
```

## TODO

- `Optimize WASM`: See official [guide](https://rustwasm.github.io/book/game-of-life/code-size.html#shrinking-wasm-size).

- `Deep comparison with Zig in tooling`: See [zig-wasm-freestanding](https://github.com/yujong-lee/zig-wasm-freestanding).

## Reference
- [MDN](https://developer.mozilla.org/ko/docs/WebAssembly/Rust_to_wasm)
- [wasm-pack](https://github.com/rustwasm/wasm-pack)
- [wasm-bindgen](https://github.com/rustwasm/wasm-bindgen)
