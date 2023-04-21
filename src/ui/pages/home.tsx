import React from 'react';
import { Link } from 'react-router-dom';
import { IAppGlobals } from '../app-router';
import TextSection from '../components/text-section';
import UIPage from '../components/ui-page';
import './home.scss';

export default class Home extends React.Component<IHomeProps, IHomeState> {
    constructor(props: IHomeProps) {
        super(props);
        this.state = {
            updated: false,
        }

        this.props.appGlobals.makeDocumentTitle("Home");
    }

    render = (): JSX.Element => {
      return (
        <UIPage current="home" appGlobals={this.props.appGlobals}>

          <div className="row">
            <div className="col-md">
              <TextSection
                label="NonCanon BattleTech Tools"
                >
                  <p>Fork of Jeffrey D. Gordon's open source <a href="https://jdgwf.github.io/battletech-tools/" target="_blank" >BattleTech Tools project</a>. This fork focuses on using the existing tools to create non-canon units for fanfics, separate from the canon adhering BattleTech Tools project. The rest of the text is imported from the original repo.</p>
                  <p>The purpose of this Progressive Web Application (PWA) is to make an easily-accessible set of tools to make both the Classic BattleTech (CBT) and Alpha Strike (AS) games faster and more efficient. Here you'll find tools for:</p>
                  <p>Although this app may be used on many devices, I've really focused on using an iPad, iPad mini, or other tablet sized devices. A laptop will work absolutely amazingly as well (especially if you have a tablet mode!), but you may find the interface a little busy for most phones. </p>
                  <ul className='styleless'>
                    <li>
                      <h3><Link to="alpha-strike/roster">Alpha Strike Roster</Link></h3>
                      <ul>
                        <li>The ability to search the <a href="http://masterunitlist.info" target="mul">Master Unit List (MUL)</a> and add Alpha Strike Units to your Companies/Lances/Stars/Binaries, etc.</li>
                        <li>After the MUL is searched and added to your forces, your units are stored offline on your local device.</li>
                        <li>You may print your AS forces here (which you can do on the MUL if you like), but more importantly you can...</li>
                        <li>Play your Alpha Strike games using a live in-play virtual stack of Alpha Strike Cards. When you unit takes damage or heat, the effects of the damage affect the card live and immediately. All your to-hit rolls are updated on-the-fly.</li>
                      </ul>
                    </li>
                    <li>
                      <h3><Link to="classic-battletech">Classic BattleTech Tools</Link></h3>
                      <p>Although this area is relatively new, it's functionality is growing nearly daily. Most of the tools here are not quite complete (there are lot of moving parts to CBT), but could very well be usable in your case.</p>
                      <ul>
                        <li>
                          <h4><Link to="classic-battletech/mech-creator">'Mech Creator</Link></h4>
                          <p>The 'mech creator closely follows the Classic BattleTech Tech Manual's steps in creating a BattleMech, whether it be a Biped or Quad.</p>
                          <ul>
                            <li>BattleValue 2, Alpha Strike Stats, and C-Bill cost are all matching up with standard BattleTech designs</li>
                            <li>Currently most introductory and standard equipment are available to Inner Sphere designs.</li>
                            <li>Very basic Clan 'mechs can be created, though data entry for the Clan equipment is lagging.</li>
                            <li>When you save your 'mechs you have the ability to add them to your 'mech roster.</li>
                          </ul>
                        </li>
                        <li>
                          <h4><Link to="classic-battletech/roster">'Mech Roster</Link></h4>
                          <p>This area is under construction, but is nearing initial completion as of 2022 April 9. Like the Alpha Strike Roster, this is a set of Electronic Record Sheets which will allow you to:</p>
                          <ul>
                            <li>Track your movement modes and to-hit numbers for each mech at a glance</li>
                            <li>Set your targets speed, range, and other to-hit modifiers (you may have up to 3 targets at one time)</li>
                            <li>Assign your weapons to your targets, your GATOR and final To-Hit will be calculated for you</li>
                            <li>During the Firing Phase, you'll open up a single sheet with all your 'mechs and weapons with their respective targets with the ability to mark the attack as resolved. Cluster hits are easily tracked as well.</li>
                            <li>Heat is automatically assigned during the heat phase per the 'mech's movement mode and discharged weapons.</li>
                          </ul>
                        </li>

                      </ul>

                    </li>
                    <li>
                      <h4><Link to="settings/backup-and-restore">Backing up and Restoring</Link></h4>
                      <p className="alert alert-warning alert-thin">Your data is always private and stored on your own device. This means that if you lose your device you lose your data!</p>
                      <p>That said, I've coded a pretty robust set of backup and restore tools which you can save on your Dropbox/OneDrive/iCloud/NextCloud/OwnCloud/Box (ad nauseum).</p>
                      <p>I've chosen this method mostly because getting logins for Google/Microsoft/etc on a GitHub hosted domain has been challenging and <strong>I want this app to be forever free and forever open source</strong> even after my untimely demise. Having this app hosted at GitHub helps guarantee that as hosting is graciously provided by GitHub at no cost.</p>
                    </li>
                  </ul>
                  <h3>Why? What's the purpose of ths app? I use Solaris Skunk Werks/Mech Factory/ etc.</h3>
                  <p>Each of these software packages are amazing tools! However what they lack is complete cross-platform compatibility and ease of tablet use. Sure, <a href="https://battletech.rpg.hu/mechfactory_frame.php">Mech Factory</a> comes close, but it can't be used offline.</p>
                  <p>I created this app originally for just an electronic Alpha Strike roster sheet, but it's grown slowly (quickly as of 2022) into more.</p>

                  <h3>What's next? What are your plans?</h3>
                  <p>Although I'm not the best at updating the <Link to="dev-status">Development Status Page</Link>, this will be the place where I place my development intentions and what I'm currently working on.</p>
                </TextSection>
            </div>
            <div className="col-md">
            <TextSection
              label="News"
            >
                  <ul className="news">
                  <li>
                    <h4>
                      <strong>2023 April 21</strong> - Initial Creation
                    </h4>
                    <h5>Inital Creation</h5>
                    <p>Forked from BattleTech Tools repo.</p>
                  </li>
                  </ul>
              </TextSection>
            </div>
          </div>

        </UIPage>
      );
    }
}

interface IHomeProps {
  appGlobals: IAppGlobals;
}

interface IHomeState {
    updated: boolean;

}