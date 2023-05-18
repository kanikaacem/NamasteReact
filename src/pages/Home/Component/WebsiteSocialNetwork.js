import { Box, Typography } from "@mui/material";
import { social_icons } from "../../../utils/Data";
import { useTranslation } from "react-i18next";
const WebsiteSocialNetwork = () => {
    const { t } = useTranslation();

    return (
        <Box className="WebsiteSocialIconsSection" sx={{
            display: "flex",
            gap: "10px",
            justifyContent: "flex-end",
            padding: { "xs": "10px", "sm": "10px", "md": "10px 50px", "lg": "10px 50px", "xl": "10px 50px" },
            cursor: "pointer"
        }}>
            <Typography variant="h1" component="h2" sx={{
                fontSize: "14px",
                color: "#000000",
                fontFamily: 'Montserrat',
                fontweight: "400",

            }}>
                {t('FIND_US')}
            </Typography >
            {social_icons.map((item) => {
                return (<Box key={item.id} sx={{
                    width: { "xs": "15px", "sm": "15px", "md": "20px", "lg": "20px", "xl": "20px" },
                    height: { "xs": "15px", "sm": "15px", "md": "20px", "lg": "20px", "xl": "20px" }
                }}>
                    <img src={item.icon_image} alt={item.icon_text} width="100%" height="100%" />
                </Box>)
            })}
        </Box>
    )
}
export default WebsiteSocialNetwork;