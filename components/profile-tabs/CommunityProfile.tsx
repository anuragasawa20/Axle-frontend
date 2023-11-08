import React from 'react';

function CommunityProfile({ CommunityData }: any) {
  return (
    <div>
      <ul>
        {Object.entries(CommunityData).map(([platform, url]:any) => (
          <li key={platform}>
            <strong>{platform}:</strong> {url ? <a href={url}>{url}</a> : 'N/A'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommunityProfile;
