import { IconProps } from "../../types/IconProps";
import { CategoriesFilledIcon } from "./CategoriesFilledIcon";
import { CategoriesIcon } from "./CategoriesIcon";
import { EyeIcon } from "./EyeIcon";
import { HandbagsIconPrimary } from "./HandbagsIcon/HandbagsIconPrimary";
import { HandbagsIconSecondary } from "./HandbagsIcon/HandbagsIconSecondary";
import { HandbagsIconFilled } from "./HandbagsIconFilled";
import { HandbagsIconUnfilled } from "./HandbagsIconUnfilled";
import { HomeIcon } from "./HomeIcon";
import { JewelleryIcon } from "./JewelleryIcon";
import { JewelleryIconSecondary } from "./JewelleryIcon/JewelleryIconSecondary";
import { SkincareIconPrimary } from "./SkincareIcon/SkincareIconPrimary";
import { WatchIconPrimary } from "./WatchIcon/WatchIconPrimary";
import { WatchIconSecondary } from "./WatchIcon/WatchIconSecondary";
import { WishlistIcon } from "./WishlistIcon";

export function IconGallery(props: IconProps){
    return (
        <>
            <HomeIcon isFilled={props.isFilled}/>
            <WishlistIcon isFilled={props.isFilled}/>
            <CategoriesIcon isFilled={props.isFilled}/>
            <CategoriesFilledIcon isFilled={props.isFilled}/>
            <HandbagsIconFilled isFilled={props.isFilled}/>
            <HandbagsIconUnfilled isFilled={props.isFilled}/>
            <SkincareIconPrimary />
            <JewelleryIcon/>
            <JewelleryIconSecondary/>
            <WatchIconPrimary/>
            <WatchIconSecondary/>
            <HandbagsIconPrimary/>
            <HandbagsIconSecondary/>
            <EyeIcon isFilled={props.isFilled}/>
        </>
    )
}