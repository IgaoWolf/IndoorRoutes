export function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="230"
      height="57"
      fill="none"
      viewBox="0 0 230 57"
    >
      <path fill="url(#pattern0)" d="M0 0H230V57H0z"></path>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use
            transform="scale(.00435 .01754)"
            xlinkHref="#image0_225_129"
          ></use>
        </pattern>
        <image
          id="image0_225_129"
          width="230"
          height="57"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAAA5CAMAAAAV3KdzAAACx1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Ad0IAazH+/fzHAADK4NT/+fjLAADEAAD+497zd3gAPgDUAAD+39zC2Mv9x8ekxrL6sKz6rKc2kmgAbTUAXhsAVhHZBgkAQwAAJwDOAAD/6+rh7OT+3Nh9sZMmjmTrUlEAekYAcTniKSsAZikAUgfy9fH+8Or+5+TS4df+1tT90M38wL37tLGIuJ53r5D2kI5KmHLydXLvZGQAgE/mOjcAOgAALQC+AAD4+fb/8/Hp7+j9zcv8yMH7ureawKj5qaH4o51pqYlMnXrzf3nuYF4KiFsAhVfnQUDeGRwAMwAAIwD6+vjs8euvy7iPvKL3nppvqopgp4dVnnvxbW5DlG0AdkDcDhAASQDg6N/Y6N/b5ty40cCr0cCuv6v4m5j1hYddoHzvbGlHj2QRiVsQfk3qS0vnSkThJSQAIAAAGAD09vO51MX1iIz0gIBhoX3lMjYAEQA04p+RAAAAe3RSTlMA8dXDiHgD0XrqGfr3EQy1hYBbfirjywq7iwjvyGpWQQb42LgeGv70nDkEJiEX5+EP/G9EIhzsvpBlKPl2ck819tPGsJ6UWD8U3bOpRzLaoo9eUUo3EgHBko5sGxXMraWYU0w95ayDfWhgLvDQzcpjYhPPkzssIDw6MDHGgjYNAAALk0lEQVRo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"
        ></image>
      </defs>
    </svg>
  );
}


