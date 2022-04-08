import React from 'react';
import { Modal } from 'react-bootstrap';
import { FaArrowCircleLeft, FaArrowCircleRight, FaPlus, FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IEquipmentItem } from '../../../../data/data-interfaces';
import { sortEquipment } from "../../../../utils";
import { IAppGlobals } from '../../../app-router';
import AvailableEquipment from '../../../components/available-equipment';
import MechCreatorSideMenu from '../../../components/mech-creator-side-menu';
import MechCreatorStatusbar from '../../../components/mech-creator-status-bar';
import SanitizedHTML from '../../../components/sanitized-html';
import TextSection from '../../../components/text-section';
import UIPage from '../../../components/ui-page';
import './home.scss';

export default class MechCreatorStep5 extends React.Component<IHomeProps, IHomeState> {
    constructor(props: IHomeProps) {
        super(props);
        this.state = {
            updated: false,
            showAddDialog: false,
        }


        this.props.appGlobals.makeDocumentTitle("Step 5 | 'Mech Creator");
    }



    addEquipment = ( item: IEquipmentItem ): boolean => {
      if( this.props.appGlobals.currentBattleMech ) {
        this.props.appGlobals.currentBattleMech.addEquipmentFromTag(
          item.tag,
          this.props.appGlobals.currentBattleMech.getTech().tag,
          "",
          false,
          null,
        );
        this.props.appGlobals.saveCurrentBattleMech( this.props.appGlobals.currentBattleMech );

        return true;
      }
      return false;
    }

    removeEquipment = ( itemIndex: number ): boolean => {
      if( this.props.appGlobals.currentBattleMech ) {
        this.props.appGlobals.currentBattleMech.removeEquipment(
          itemIndex
        );
        this.props.appGlobals.saveCurrentBattleMech( this.props.appGlobals.currentBattleMech );

        return true;
      }
      return false;
    }

    setRear = ( itemIndex: number, isRear: boolean ): boolean => {
      if( this.props.appGlobals.currentBattleMech ) {
        this.props.appGlobals.currentBattleMech.setRear(
          itemIndex,
          isRear,
        );
        this.props.appGlobals.saveCurrentBattleMech( this.props.appGlobals.currentBattleMech );

        return true;
      }
      return false;
    }



    openInstallDialog = (): void => {
      this.setState({
        showAddDialog: true,
      });
    }

    closeInstallDialog = (): void => {
      this.setState({
        showAddDialog: false,
      });
    }

    render = (): React.ReactFragment => {
      if(!this.props.appGlobals.currentBattleMech)
        return <></>
      return (
        <>
            <Modal
              show={this.state.showAddDialog} onHide={this.closeInstallDialog}
              className="modal-xl"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                      Installing Equipment
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="overflow-scroll-y">
                    <div className="form">
                        <div>
                            <AvailableEquipment
                              appGlobals={this.props.appGlobals}
                              equipment={this.props.appGlobals.currentBattleMech.getAvailableEquipment()}
                              addFunction={this.addEquipment}
                              hideUnavailable={this.props.appGlobals.currentBattleMech.hideNonAvailableEquipment}
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-primary" onClick={this.closeInstallDialog}>
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
            <MechCreatorStatusbar  appGlobals={this.props.appGlobals}  />
          <UIPage current="classic-battletech-mech-creator" appGlobals={this.props.appGlobals}>

            <div className="row">
              <div className="d-none d-md-block col-md-3 col-lg-2">
                <MechCreatorSideMenu
                  appGlobals={this.props.appGlobals}
                  current="step5"
                />
              </div>
              <div className="col-md-9 col-lg-10">
                  <div className="row">
                    <div className="col-md-12 col-lg-8">
                      <TextSection
                        label="Step 5: Add weapons, ammunition and other equipment"
                      >


                          <button
                            className="btn btn-primary pull-right btn-sm"
                            title="Open the add dialog"
                            onClick={this.openInstallDialog}
                          >
                            <FaPlus />
                          </button>

                          <h3 className="text-center">Installed Equipment</h3>


                          {this.props.appGlobals.currentBattleMech.getInstalledEquipment().length > 0 ? (

                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>Name</th>
                                    {/* <th>Sort</th> */}
                                    <th>Weight</th>
                                    <th>Rear</th>
                                    <th>&nbsp;</th>
                                  </tr>
                                </thead>

                                {this.props.appGlobals.currentBattleMech.getInstalledEquipment().sort(sortEquipment).map( (item, itemIndex) => {
                                  return (
                                    <tbody key={itemIndex}>
                                    <tr>
                                      <td>{item.name}</td>
                                      {/* <td>{item.sort}</td> */}
                                      <td>{item.weight}</td>
                                      <td>
                                        <input
                                          type="checkbox"
                                          checked={item.rear}
                                          onChange={( event: React.FormEvent<HTMLInputElement>) => this.setRear( itemIndex, event.currentTarget.checked)}
                                        />
                                      </td>
                                      <td className="text-right">
                                        <button
                                          className="btn-sm btn btn-danger"
                                          onClick={() => this.removeEquipment( itemIndex)}
                                        >
                                          <FaTrash />
                                        </button>

                                      </td>
                                    </tr>
                                    </tbody>
                                  )
                                })}

                              </table>
                          ) : (
                            <>
                            <hr className="clear-both" />
                            <br />
                            <p className="text-center">No equipment has been installed.</p>
                            <p className="text-center">Click the
                            &nbsp;<button
                              className="btn btn-primary btn-xs no-margin"
                              title="Open the add dialog"
                              onClick={this.openInstallDialog}
                            >
                              <FaPlus />
                            </button>&nbsp;
                            to the top left to install equipment.</p>
                            </>
                          )}
                          <div className="clear-both overflow-hidden">
                            <hr />
                            <Link to={`${process.env.PUBLIC_URL}/classic-battletech/mech-creator/step6`} className="btn btn-primary pull-right btn-sm">Next Step <FaArrowCircleRight /></Link>
                            <div className="inline-block text-left">
                              <Link to={`${process.env.PUBLIC_URL}/classic-battletech/mech-creator/step4`} className="btn btn-primary btn-sm"><FaArrowCircleLeft /> Previous Step</Link>
                            </div>
                          </div>
                          </TextSection>


                    </div>
                    <div className="d-none d-lg-block col-lg-4">
                    <TextSection

                    >
                      <div className="mech-tro">
                        <SanitizedHTML raw={true} html={this.props.appGlobals.currentBattleMech.makeTROHTML()} />
                      </div>
                    </TextSection>
                    </div>
                  </div>

              </div>

              </div>

        </UIPage>
        </>
      );
    }
}

interface IHomeProps {
  appGlobals: IAppGlobals;
}

interface IHomeState {
    updated: boolean;
    showAddDialog: boolean;

}