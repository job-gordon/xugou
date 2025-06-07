import { ReactNode } from "react";
import { Box, Flex, Text, Container, Theme } from "@radix-ui/themes";
import { Separator, Button, Toaster } from "./ui";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <Theme appearance="light">
      <Flex direction="column" className="min-h-[100vh]" >
        {/* 顶部导航栏 */}
        <Navbar />

        {/* 主要内容 */}
        <Box className="grow px-2">{children}</Box>

        {/* 页脚 */}
        <Box>
          <Container>
            <Separator color="gray" />
            <Flex justify="center" align="center" py="3" direction="column">
              <Text size="2" color="gray">
                {t("footer.copyright", { year: currentYear })}
              </Text>
            </Flex>
          </Container>
        </Box>
        <Toaster /> 
      </Flex>
    </Theme>
  );
};

export default Layout;
