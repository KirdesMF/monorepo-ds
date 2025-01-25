import fs from 'fs';
import path from 'path';

/**
 * Leaf token (e.g., { "value": "#FFFFFF" } )
 */
interface TokenValue {
  value: string;
}

/**
 * A nested object structure where each key can be:
 * - Another nested TokenObject
 * - A final leaf node (TokenValue)
 */
type TokenObject = {
  [key: string]: TokenValue | TokenObject;
};

/**
 * Type guard to check if the object is a leaf node (TokenValue).
 */
function hasValue(obj: TokenValue | TokenObject): obj is TokenValue {
  return typeof obj === 'object' && obj !== null && 'value' in obj;
}

/**
 * Recursively flatten a nested token object into key-value pairs.
 *
 * @param tokens - A nested token structure (TokenObject).
 * @param prefix - A prefix for constructing hierarchical variable names (e.g., `colors-bg-primary`).
 * @returns An object whose keys are flattened, e.g., { 'colors-bg-primary': '#FFF', ... }
 */
function flattenTokens(tokens: TokenObject, prefix = ''): Record<string, string> {
  const result: Record<string, string> = {};

  for (const key in tokens) {
    const current = tokens[key];

    // This is a leaf with a `.value` property
    if (hasValue(current)) {
      const fullKey = prefix ? `${prefix}-${key}` : key;
      result[fullKey] = current.value;
    }

    // This is a nested object (TokenObject)
    if (!hasValue(current)) {
      const newPrefix = prefix ? `${prefix}-${key}` : key;
      // Recursively merge flattened children
      Object.assign(result, flattenTokens(current as TokenObject, newPrefix));
    }
  }

  return result;
}

/**
 * Generate CSS content with custom properties.
 *
 * @param tokens - A record of flattened token keys and their values.
 * @returns A string of CSS custom properties.
 */
function generateCSS(tokens: Record<string, string>): string {
  const cssVariables = Object.entries(tokens)
    .map(([key, value]) => `  --${key}: ${value};`)
    .join('\n');

  // Example wrapper (could be :root, .theme class, etc.)
  return `@theme {\n${cssVariables}\n}`;
}

// Main execution
// Read the token.json file
const tokenPath = path.resolve(__dirname, 'token.json');
const rawJson = fs.readFileSync(tokenPath, 'utf-8');

// Parse the JSON; cast to your known structure
const tokenData = JSON.parse(rawJson) as { global: TokenObject };

// Flatten global tokens
const flatTokens = flattenTokens(tokenData.global);

// Generate CSS content
const cssContent = generateCSS(flatTokens);

// Write the generated CSS to tailwind.css
const outputPath = path.resolve(__dirname, 'tailwind.css');
fs.writeFileSync(outputPath, cssContent);

console.log('CSS file generated successfully!');
