import React from "react";
import { NftCard } from "./NftCard";
import { NftMetadata } from "../types";
import { Grid } from "semantic-ui-react";

interface NftGalleryProps {
  nfts: NftMetadata[];
}

export const NftGallery = ({ nfts }: NftGalleryProps) => {
  return (
    <div className="nft-gallery">
      {nfts.map((nft) => (
        <div key={nft.edition}>
          <NftCard nft={nft} />
        </div>
      ))}
    </div>
  );
};
