import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { FocusTrapCallout } from 'office-ui-fabric-react/lib/Callout';
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react/lib/CommandBar';
import './CalloutExample.scss';

export interface ICalloutFocusTrapExampleProps {
  items: ICommandBarItemProps[];
}

export class CalloutFocusTrapExample extends React.Component<
  ICalloutFocusTrapExampleProps,
  {
    isCalloutVisible: boolean;
  }
> {
  private _menuButtonElement: HTMLElement | null;

  public constructor(props: ICalloutFocusTrapExampleProps) {
    super(props);

    this._onDismiss = this._onDismiss.bind(this);

    this.state = {
      isCalloutVisible: false
    };
  }

  public render(): JSX.Element {
    const { isCalloutVisible } = this.state;

    return (
      <div className="ms-CalloutExample">
        <div className="ms-CalloutBasicExample-buttonArea" ref={menuButton => (this._menuButtonElement = menuButton)}>
          <DefaultButton onClick={this._onDismiss} text={isCalloutVisible ? 'Hide callout' : 'Show callout'} />
        </div>
        {isCalloutVisible ? (
          <div>
            <FocusTrapCallout
              role={'alertdialog'}
              ariaLabelledBy={'callout-label-2'}
              className="ms-CalloutExample-callout"
              gapSpace={0}
              target={this._menuButtonElement}
              onDismiss={this._onDismiss}
              setInitialFocus={true}
            >
              <div className="ms-CalloutExample-header">
                <p className="ms-CalloutExample-title" id={'callout-label-2'}>
                  Callout title here
                </p>
              </div>
              <div className="ms-CalloutExample-inner">
                <div className="ms-CalloutExample-content">
                  <p className="ms-CalloutExample-subText">
                    Message body is optional. If help documentation is available, consider adding a link to learn more at the bottom.
                  </p>
                </div>
              </div>
              <CommandBar items={this.props.items} />
            </FocusTrapCallout>
          </div>
        ) : null}
      </div>
    );
  }

  private _onDismiss(ev: any): void {
    this.setState({
      isCalloutVisible: !this.state.isCalloutVisible
    });
  }
}