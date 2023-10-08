import StyledComponentsRegistry from "./lib/registry";
import GlobalStyles from "./style/GlobalStyles";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ko">
            <body>
                <StyledComponentsRegistry>
                    <GlobalStyles />
                    {children}
                </StyledComponentsRegistry>
            </body>
        </html>
    )
}
