import { BrandImageContainer } from "./styles";

export interface BrandProps {
    src: string;
    onClick?: () => void;
}

export function Brand({ src, onClick }: BrandProps) {
  return (
    <BrandImageContainer src={src} onClick={onClick}>

    </BrandImageContainer>
  )
}
