const js = import("./node_modules/@yujonglee/mdn-rust-wasm/mdn_rust_wasm.js");
js.then(js => {
  js.greet("WebAssembly");
});
