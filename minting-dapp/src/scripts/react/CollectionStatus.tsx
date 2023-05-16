import React from "react";

interface Props {
  userAddress: string | null;
  totalSupply: number;
  maxSupply: number;
  isPaused: boolean;
  isWhitelistMintEnabled: boolean;
  isUserInWhitelist: boolean;
  isSoldOut: boolean;
}

interface State {}

const defaultState: State = {};

export default class CollectionStatus extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  private isSaleOpen(): boolean {
    return (
      (this.props.isWhitelistMintEnabled || !this.props.isPaused) &&
      !this.props.isSoldOut
    );
  }

  render() {
    return (
      <>
        <div className="collection-status">
          <div className="user-address">
            <span className="label">Your wallet address:</span>
            <span className="address">{this.props.userAddress}</span>
          </div>

         
          <div className="user-address">            
           <span className="address">Need Faucet?</span>
           <span className="label"><a href="https://faucet-bsr-celestia.qubelabs.io" target="_blank">CLICK HERE</a></span>
          </div>


          <div className="supply">
            <span className="label">Supply</span>
            {this.props.totalSupply}/{this.props.maxSupply}
          </div>

          <div className="current-sale">
            <span className="label">Mint status</span>
            {this.isSaleOpen() ? (
              <>
                {this.props.isWhitelistMintEnabled ? "Whitelist only" : "Open"}
              </>
            ) : (
              "Closed"
            )}
          </div>
        </div>
      </>
    );
  }
}
