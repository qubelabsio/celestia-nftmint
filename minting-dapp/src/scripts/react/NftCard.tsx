// create a card that displays the minted NFT
import React from "react";
import { Card, Image } from "semantic-ui-react";
import { NftMetadata } from "../types";

interface NftCardProps {
  nft: NftMetadata;
}

// we need to fetch the metadata from our contract and display it in a card

export const NftCard = ({ nft }: NftCardProps) => {
  const ipfsGateway = "https://ipfs.io/ipfs/";
  const imageUrl = nft.image.replace("ipfs://", "");
  return (
    <div className="nft-card mb-4">
      <div className="preview">
        <img src={ipfsGateway + imageUrl} alt={nft.name} />
      </div>
      <Card.Content>
        <Card.Meta>
          <span className="edition">NFT: {nft.edition}</span>
        </Card.Meta>
      </Card.Content>
    </div>
  );
};
