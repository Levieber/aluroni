declare global {
	export * from "*.scss";
}

interface OutputMetadata {
  src: string; // URL of the generated image
  width: number; // Width of the image
  height: number; // Height of the image
  format: string; // Format of the generated image
}

declare module "*&as=metadata" {
  const outputs: OutputMetadata;
  export default outputs;
}

declare module "*&as=srcset" {
  const outputs: string;
  export default outputs;
}
