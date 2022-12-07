import {SkeletonContainer} from "./styles";

export function SkeletonLoading() {
    return (
        <SkeletonContainer>
            <div className="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </SkeletonContainer>
    )
}
