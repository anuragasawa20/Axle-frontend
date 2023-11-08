import "../../styles/axlefetures.scss"
import Image from "next/image"
import FeatureImg from "../../../assets/landing/FetImg.png"

function FeaturesGrid({
    children,
    title
}: {
    children: React.ReactNode,
    title: string
}) {
    return (
        <div className="features-grid-main">
            <div className="features-grid">

                <Image src={FeatureImg} alt="features-grid" />

                <div>
                    <h3>{title}</h3>
                    <p>{children}</p>
                </div>
            </div>
        </div>
    )
}

export default FeaturesGrid