import * as fs from 'fs';
import * as path from 'path';

interface TokenValue {
  value: string;
  type: string;
  description?: string;
}

interface Tokens {
  [key: string]: Tokens | TokenValue;
}

interface TokenSet {
  global: Tokens;
  $themes: any[];
  $metadata: {
    tokenSetOrder: string[];
  };
}

function processTokens(tokens: Tokens, prefix: string = ''): string {
  let cssVariables = '';

  for (const [key, value] of Object.entries(tokens)) {
    const fullKey = prefix ? `${prefix}-${key}` : key;

    if (typeof value === 'object' && 'value' in value) {
      const tokenValue = value as TokenValue;

      // Handle aliases (e.g., "{color.af-pink.500}")
      let resolvedValue = tokenValue.value;
      if (resolvedValue.startsWith('{') && resolvedValue.endsWith('}')) {
        // Extract the reference path (e.g., "color.af-pink.500")
        const referencePath = resolvedValue.slice(1, -1).split('.');
        // Convert the reference path to a CSS variable name (e.g., "--color-af-pink-500")
        resolvedValue = `var(--${referencePath.join('-')})`;
      }

      // Add the token to the CSS output
      cssVariables += `  --${fullKey}: ${resolvedValue};\n`;
    } else if (typeof value === 'object') {
      // Recursively process nested tokens
      cssVariables += processTokens(value as Tokens, fullKey);
    }
  }

  return cssVariables;
}

function convertJsonToCss(json: TokenSet): string {
  let cssContent = '@theme {\n';
  cssContent += processTokens(json.global);
  cssContent += '}\n';
  return cssContent;
}

function main() {
  const jsonFilePath = path.join(__dirname, 'token.json');
  const cssFilePath = path.join(__dirname, 'index.css');

  const jsonContent = fs.readFileSync(jsonFilePath, 'utf-8');
  const tokenSet: TokenSet = JSON.parse(jsonContent);

  const cssContent = convertJsonToCss(tokenSet);

  fs.writeFileSync(cssFilePath, cssContent, 'utf-8');
  console.log('CSS file has been written successfully.');
}

main();
