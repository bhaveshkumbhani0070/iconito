import React, { useCallback, useState } from "react";
import { Card, Text, TextField, Button, RangeSlider, Divider, ButtonGroup, Grid, Checkbox, Select, ColorPicker, Popover } from "@shopify/polaris";
import './style.css';

// Helper functions
const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
};

const rgbToHex = (r, g, b) => {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

const convertHSBtoRGB = (hue, saturation, brightness) => {
    let chroma = brightness * saturation;
    let hue1 = hue / 60;
    let x = chroma * (1 - Math.abs((hue1 % 2) - 1));
    let rgb1;
    if (hue1 >= 0 && hue1 < 1) {
        rgb1 = [chroma, x, 0];
    } else if (hue1 >= 1 && hue1 < 2) {
        rgb1 = [x, chroma, 0];
    } else if (hue1 >= 2 && hue1 < 3) {
        rgb1 = [0, chroma, x];
    } else if (hue1 >= 3 && hue1 < 4) {
        rgb1 = [0, x, chroma];
    } else if (hue1 >= 4 && hue1 < 5) {
        rgb1 = [x, 0, chroma];
    } else if (hue1 >= 5 && hue1 < 6) {
        rgb1 = [chroma, 0, x];
    } else {
        rgb1 = [0, 0, 0];
    }
    let m = brightness - chroma;
    let [r, g, b] = rgb1.map((c) => Math.round((c + m) * 255));
    return rgbToHex(r, g, b);
};

function Style() {
    // State declarations and functions
    const [size, setSize] = useState(30);
    const [checked, setChecked] = useState(false);
    const [selectedSubtitle, setSelectedSubtitle] = useState('bold');
    const [selectedtitle, setSelectedtitle] = useState('overline')
    const [colorPickerActive, setColorPickerActive] = useState(false);
    // Color Picker 
    const [backColor, setBackColor] = useState({ hue: 120, brightness: 1, saturation: 0.7 });
    const [titleColor, setTitleColor] = useState({ hue: 120, brightness: 1, saturation: 0.7 });
    const [iconColor, setIconColor] = useState({ hue: 120, brightness: 1, saturation: 0.7 });
    const [subtitleColor, setSubtitleColor] = useState({ hue: 120, brightness: 1, saturation: 0.7 });

    const [titleFont, setTitleFont] = useState(30);
    const [titleSubFont, setTitleSubFont] = useState(25);

    const [boldSize, setBoldSize] = useState(10);

    const [goseUp, setGoseUp] = useState(5)
    const [goseDown, setGoseDown] = useState(10);
    const handleSelectChange = useCallback(
        (value) => setSelectedtitle(value),
        [],
    );
    const handleSelectSubChange = useCallback(
        (value) => setSelectedSubtitle(value),
        [],
    );

    const handleChange = useCallback(
        (newChecked) => setChecked(newChecked),
        [],
    );

    const toggleColorPicker = (i) => {
        setColorPickerActive(i);
    };

    // Other variables
    const options = [
        { label: 'Bold', value: 'bold' },
        { label: 'Italic', value: 'italic' },
        { label: 'Underline', value: 'underline' },
        { label: 'Strikethrough', value: 'line-through' },
        { label: 'Overline', value: 'overline' },
        { label: 'Uppercase', value: 'uppercase' },
        { label: 'Lowercase', value: 'lowercase' },
        { label: 'Capitalized', value: 'capitalize' },
        { label: 'Small Caps', value: 'small-caps' },
    ];

    // Color picker
    const colorData = [
        { label: 'Background Color', onChange: setBackColor, color: backColor },
        { label: 'Title Color', onChange: setTitleColor, color: titleColor },
        { label: 'Icon Color', onChange: setIconColor, color: iconColor },
        { label: 'Subtitle Color', onChange: setSubtitleColor, color: subtitleColor },
    ];

    // JSX structure
    return (
        <>
            <div>
                <Card roundedAbove="xl">
                    <div className="space--card">
                        <Text fontWeight="bold" variant="headingMd" pb="10">Icon Size</Text>
                        <Grid>
                            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 8, xl: 8 }} >
                                <RangeSlider output value={size} onChange={(e) => setSize(e)} />
                            </Grid.Cell>
                            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 4, xl: 4 }}>
                                <TextField type="number" value={size} autoComplete="off" />
                            </Grid.Cell>
                        </Grid>
                        <Divider />
                    </div>

                    <div className="space--card">
                        <Text fontWeight="bold" variant="headingMd">Colors</Text>
                        <Grid justifyContent="space-between">
                            {colorData.map((clr, i) => (
                                <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                                    <div style={{ display: 'grid', alignItems: 'center', justifyContent: 'space-between', gridTemplateColumns: '1fr 1fr' }}>
                                        <Text>{clr.label} :</Text>
                                        <div>
                                            <Popover
                                                active={colorPickerActive === i}
                                                activator={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Button onClick={() => toggleColorPicker(i)} style={{ width: '20px', height: '20px', backgroundColor: convertHSBtoRGB(clr.color.hue, clr.color.saturation, clr.color.brightness) }}></Button>
                                                    <TextField value={convertHSBtoRGB(clr.color.hue, clr.color.saturation, clr.color.brightness)}></TextField>
                                                </div>}
                                                onClose={() => toggleColorPicker(false)}
                                            >
                                                <div>
                                                    <ColorPicker onChange={clr.onChange} color={clr.color} />
                                                </div>
                                            </Popover>
                                        </div>
                                    </div>
                                </Grid.Cell>

                            ))}
                            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                                <Checkbox
                                    label="Transparant Background"
                                    checked={checked}
                                    onChange={handleChange}
                                />
                            </Grid.Cell>
                        </Grid>
                        <Divider />
                    </div>

                    <div className="space--card">
                        <Text fontWeight="bold" variant="headingMd">Typography</Text>

                        <Grid justifyContent="space-between">
                            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                                <TextField
                                    label="Title Font Size"
                                    type="number"
                                    value={titleFont}
                                    suffix="px"
                                    onChange={setTitleFont}
                                    autoComplete="off"
                                />
                            </Grid.Cell>
                            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                                <Select
                                    label="Title Font Style"
                                    options={options}
                                    onChange={handleSelectChange}
                                    value={selectedtitle}
                                />
                            </Grid.Cell>
                            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                                <TextField
                                    label="Subtitle Font Size"
                                    type="number"
                                    value={titleSubFont}
                                    suffix="px"
                                    onChange={setTitleSubFont}
                                    autoComplete="off"
                                />
                            </Grid.Cell>
                            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                                <Select
                                    label="Subtitle Font Style"
                                    options={options}
                                    onChange={handleSelectSubChange}
                                    value={selectedSubtitle}
                                />
                            </Grid.Cell>
                        </Grid>
                        <Divider />
                    </div>

                    <div className="space--card">
                        <Text fontWeight="bold" variant="headingMd">Spacing</Text>
                        <Grid>
                            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 8, xl: 8 }} style={{ display: 'flex', alignItems: 'center' }}>
                                <RangeSlider output value={boldSize} onChange={(e) => setBoldSize(e)} label="Block size" />
                            </Grid.Cell>
                            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 4, xl: 4 }}>
                                <TextField type="number" value={boldSize} autoComplete="off" />
                            </Grid.Cell>
                        </Grid>
                        <Divider />
                    </div>
                    <div className="space--card">
                        <Text fontWeight="bold" variant="headingMd">Border Location</Text>
                        <Grid>
                            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                                <TextField
                                    label="Goes Up"
                                    type="number"
                                    value={goseUp}
                                    onChange={setGoseUp}
                                    suffix="px"
                                    autoComplete="off"
                                />
                            </Grid.Cell>
                            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                                <TextField
                                    label="Goes Down"
                                    type="number"
                                    value={goseDown}
                                    onChange={setGoseDown}
                                    suffix="px"
                                    autoComplete="off"
                                />
                            </Grid.Cell>
                            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 8, xl: 8 }} style={{ display: 'flex', alignItems: 'center' }}>
                                <RangeSlider output value={size} onChange={(e) => setSize(e)} label="Block size" />
                            </Grid.Cell>
                            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 4, xl: 4 }}>
                                <TextField type="number" value={size} autoComplete="off" />
                            </Grid.Cell>
                        </Grid>
                    </div>
                </Card>
                <div style={{ marginTop: '20px' }}>

                    <ButtonGroup >
                        <Button primary>Save</Button>
                        <Button>Delete</Button>
                    </ButtonGroup>
                </div>
            </div >
        </>
    )
}

export default Style;
