import { Banner, Button, Card, BlockStack, InlineStack, Text, Layout } from "@shopify/polaris";
import { useState } from "react";
import { useSelector } from 'react-redux';

function IconStyleData() {
    const iconsStyle = useSelector((state) => state.icon.icons);

    return (
        <>
            <div align="center">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={iconsStyle.width} height={iconsStyle.height} viewBox="0 0 48 48">
                    <path fill={iconsStyle.fill} d="M40,25c0-8.822-7.178-16-16-16S8,16.178,8,25c0,1.569-1.209,2.843-2.745,2.974 C6.686,37.051,14.521,44,24,44s17.314-6.949,18.745-16.026C41.209,27.843,40,26.569,40,25z"></path><path fill={iconsStyle.fill} d="M24,3C11.869,3,2,12.869,2,25c0,1.657,1.343,3,3,3c0.088,0,0.17-0.018,0.255-0.026 C5.102,27.003,5,26.014,5,25C5,14.507,13.507,6,24,6s19,8.507,19,19c0,1.014-0.102,2.003-0.255,2.974C42.83,27.982,42.912,28,43,28 c1.657,0,3-1.343,3-3C46,12.869,36.131,3,24,3z"></path><path fill="#fafafa" d="M24,6C13.507,6,5,14.507,5,25c0,1.014,0.102,2.003,0.255,2.974C6.791,27.843,8,26.569,8,25 c0-8.822,7.178-16,16-16s16,7.178,16,16c0,1.569,1.209,2.843,2.745,2.974C42.898,27.003,43,26.014,43,25C43,14.507,34.493,6,24,6z"></path><circle cx="16.5" cy="22.5" r="5.5" fill="#2100c4"></circle><circle cx="18" cy="22" r="4" fill="#c2ffff"></circle><circle cx="31.5" cy="22.5" r="5.5" fill="#2100c4"></circle><rect width="6" height="1" x="21" y="28" fill="none"></rect><circle cx="33" cy="22" r="4" fill="#c2ffff"></circle><path fill={iconsStyle.fill} d="M24,22L24,22c-4.418,0-8,3.582-8,8v2.357c0,1.308,0.941,2.499,2.242,2.63 C19.739,35.137,21,33.966,21,32.5V29h6l0,3.357c0,1.308,0.941,2.499,2.242,2.63C30.739,35.137,32,33.966,32,32.5V30 C32,25.582,28.418,22,24,22z"></path><path fill="#eb7900" d="M21,28.5v4.477C21.838,33.61,22.869,34,24,34s2.162-0.39,3-1.023V28.5H21z"></path><ellipse cx="24" cy="28.5" fill="#2100c4" rx="3" ry="2.5"></ellipse>
                </svg>

                <h1 style={{
                    color: iconsStyle.titleColor, fontSize: `${iconsStyle.titleFont}px`,
                    textTransform: iconsStyle.selectedtitle, fontStyle: iconsStyle.selectedtitle, textDecoration: iconsStyle.selectedtitle
                }}>Any Question</h1>
                <h2 style={{
                    color: iconsStyle.subtitleColor, fontSize: `${iconsStyle.titleSubFont}px`,
                    textTransform: iconsStyle.selectedSubtitle, fontStyle: iconsStyle.selectedSubtitle, textDecoration: iconsStyle.selectedSubtitle
                }}>Contact Us Now</h2>
            </div>
            <div align="center">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={iconsStyle.width} height={iconsStyle.height} viewBox="0 0 48 48">
                    <path fill={iconsStyle.fill} d="M24,3c11.046,0,20,8.954,20,20s-8.954,20-20,20S4,34.046,4,23c0-6,3-8,3-8S8.966,3,24,3z"></path>
                    <circle cx="24" cy="25" r="17" fill="#2100c4"></circle>
                    <circle cx="40.5" cy="32.5" r="4.5" fill={iconsStyle.fill}></circle><circle cx="7.5" cy="32.5" r="4.5" fill={iconsStyle.fill}></circle><path fill={iconsStyle.fill} d="M24,12c-9.389,0-17,7.611-17,17s7.611,17,17,17s17-7.611,17-17S33.389,12,24,12z"></path><path fill="#2100c4" d="M27.935,39.426C27.623,38.293,25.987,37,24,37s-3.623,1.293-3.935,2.426 C20.026,39.544,20,39.669,20,39.8c0,0.663,0,1.2,0,1.2c0.8,0,7.2,0,8,0c0,0,0-0.537,0-1.2C28,39.669,27.974,39.544,27.935,39.426z"></path><circle cx="31" cy="28" r="6" fill="#fafafa"></circle><circle cx="16" cy="28" r="6" fill="#fafafa"></circle><circle cx="31" cy="29" r="2" fill="#2100c4"></circle><circle cx="16" cy="29" r="2" fill="#2100c4"></circle>
                </svg>
                <h1 style={{
                    color: iconsStyle.titleColor, fontSize: `${iconsStyle.titleFont}px`,
                    textTransform: iconsStyle.selectedtitle, fontStyle: iconsStyle.selectedtitle, textDecoration: iconsStyle.selectedtitle
                }}>Any Question</h1>
                <h2 style={{
                    color: iconsStyle.subtitleColor, fontSize: `${iconsStyle.titleSubFont}px`,
                    textTransform: iconsStyle.selectedSubtitle, fontStyle: iconsStyle.selectedSubtitle, textDecoration: iconsStyle.selectedSubtitle
                }}>Contact Us Now</h2>
            </div>
            <div align="center">
                <svg xmlns="http://www.w3.org/2000/svg" width={iconsStyle.width} height={iconsStyle.height} viewBox="0 0 24 24">
                    <path fill={iconsStyle.fill} d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <h1 style={{
                    color: iconsStyle.titleColor, fontSize: `${iconsStyle.titleFont}px`,
                    textTransform: iconsStyle.selectedtitle, fontStyle: iconsStyle.selectedtitle, textDecoration: iconsStyle.selectedtitle
                }}>Any Question</h1>
                <h2 style={{
                    color: iconsStyle.subtitleColor, fontSize: `${iconsStyle.titleSubFont}px`,
                    textTransform: iconsStyle.selectedSubtitle, fontStyle: iconsStyle.selectedSubtitle, textDecoration: iconsStyle.selectedSubtitle
                }}>Contact Us Now</h2>
            </div>
            <div align="center">
                <svg xmlns="http://www.w3.org/2000/svg" width={iconsStyle.width} height={iconsStyle.height} viewBox="0 0 24 24">
                    <circle fill={iconsStyle.fill} cx="12" cy="12" r="12" />
                    <circle fill="#fafafa" cx="8" cy="10" r="1.5" />
                    <circle fill="#fafafa" cx="16" cy="10" r="1.5" />
                    <path fill="#fafafa" d="M8 15c2.4 2.4 5.6 2.4 8 0" />
                </svg>
                <h1 style={{
                    color: iconsStyle.titleColor, fontSize: `${iconsStyle.titleFont}px`,
                    textTransform: iconsStyle.selectedtitle, fontStyle: iconsStyle.selectedtitle, textDecoration: iconsStyle.selectedtitle
                }}>Any Question</h1>
                <h2 style={{
                    color: iconsStyle.subtitleColor, fontSize: `${iconsStyle.titleSubFont}px`,
                    textTransform: iconsStyle.selectedSubtitle, fontStyle: iconsStyle.selectedSubtitle, textDecoration: iconsStyle.selectedSubtitle
                }}>Contact Us Now</h2>
            </div>
        </>
    )
}

function Preview() {
    const [isDesktop, setIsDesktop] = useState(true);
    const handleLayoutChange = () => {
        setIsDesktop(!isDesktop);
    };

    return (
        <div className="custom-card">
            <Layout>
                <Layout.Section>
                    <Card >
                        <InlineStack align="center">
                            <Button onClick={handleLayoutChange}>Desktop</Button>
                            <Button onClick={handleLayoutChange}>Mobile</Button>
                        </InlineStack>
                        <br />
                        {isDesktop ? (
                            <InlineStack blockAlign="center" align="space-between">
                                <IconStyleData />

                            </InlineStack>
                        ) : (
                            <BlockStack>
                                <IconStyleData />
                            </BlockStack>
                        )}

                    </Card>
                </Layout.Section>
                <Layout.Section variant="oneThird">
                    <Banner
                        tone="warning"
                        title="for premium features please upgrade your plan. for only a cup of coffe (4,99/mo) you can have almost unlimited features"
                        status="warning"
                        action={{ content: 'Satrt 3-days trial', url: '' }}
                        onDismiss={() => { }}
                    >
                    </Banner>
                </Layout.Section>
            </Layout>

        </div >
    )
}

export default Preview;