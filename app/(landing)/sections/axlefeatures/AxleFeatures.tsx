import FeaturesGrid from "./FeaturesGrid";

function AxleFeatures() {
  return (
    <div className="main-axle-features">
      <h1 className="main-heading">
        FEATURES OF <span>AXLE</span>
      </h1>
      <div className="axle-features">
        <FeaturesGrid title="User Controlled Data Ownership">
        Securely store and manage gaming data on the blockchain. Users will have full control and ownership. Recognize and reward contributions with tokens and badges.

        </FeaturesGrid>

        <FeaturesGrid title="Gamified Rewards System">
        Engage in games with added motivation. Earn exclusive NFTs and in-game rewards for excellence and
          authenticity on the platform with enjoyment.
        </FeaturesGrid>

        <FeaturesGrid title="Community Driven Design">
        Interact, share ideas, and participate in community events. Enhance gaming experience by betting on matches, fostering a vibrant and engaged community
        </FeaturesGrid>
      </div>
    </div>
  );
}

export default AxleFeatures;
