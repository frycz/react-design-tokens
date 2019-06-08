import React from "react";
import { ThemeProvider } from "theme-ui";
import { omitBy, pickBy, isString } from "lodash";
import { Swatches, ColorSwatch, PaletteSwatch } from "../index";
import Stack from "stack-styled/emotion/Stack";

export default function Colors({ theme }) {
	const gap = 2;
	const colors = pickBy(theme.colors, isString);
	const palettes = omitBy(theme.colors, isString);
	return (
		<ThemeProvider theme={theme}>
			<Stack gap={gap}>
				<Swatches theme={theme} items={palettes}>
					{(key, value) => (
						<Stack gap={0} minWidth={100}>
							<PaletteSwatch token={key} value={value} />
						</Stack>
					)}
				</Swatches>
				<Stack gap={gap} minWidth={150}>
					<Swatches theme={theme} items={colors}>
						{(key, value) => <ColorSwatch token={key} value={value} />}
					</Swatches>
				</Stack>
			</Stack>
		</ThemeProvider>
	);
}
