import React                from 'react';
/*
 import ArmorClassStore     from ../../stores/{Name of Store}
 import BaseAttackStore     from ../../stores/{Name of Store}
 import CharacterInfoStore  from ../../stores/{Name of Store}
 import CombatStore         from ../../stores/{Name of Store}
 import FeatStore           from ../../stores/{Name of Store}
 import HealthStore         from ../../stores/{Name of Store}
 import InitiativeStore     from ../../stores/{Name of Store}
 import SaveStore           from ../../stores/{Name of Store}
 import SkillStore          from ../../stores/{Name of Store}
 import SpellStore          from ../../stores/{Name of Store}
 import StatStore           from ../../stores/{Name of Store}
 */

import TextField            from 'material-ui/lib/text-field.js';
import Tabs                 from 'material-ui/lib/tabs/tabs.js';
import Tab                  from 'material-ui/lib/tabs/tab.js'

export default class Character extends React.Component{
    constructor(props, state){
        super(props, state);
        this.state = {
            ArmorClass: {},
            BaseAttack: {},
            CharacterInfo: {},
            Combat: {},
            Feat: {},
            Health: {},
            Initiative: {},
            Save: {},
            Skill: {},
            Spell: {},
            Stat: {},

            Items: [],
            Armor: [],
            Weapons: []
        }
    }

    render(){

        return (
            <div className="small-12 columns">
                <div className="row">
                    <div className="small-6 columns">
                        <div className="small-4 columns">
                            <TextField hintText="Character Name" defaultValue={null} fullWidth={true}/>
                        </div>
                        <div className="small-2 columns">
                            <TextField hintText="Class" defaultValue={null} fullWidth={true}/>
                        </div>
                        <div className="small-2 columns">
                            <TextField hintText="Level" defaultValue={null} fullWidth={true}/>
                        </div>
                        <div className="small-2 columns">
                            <TextField hintText="Current XP" defaultValue={null} fullWidth={true}/>
                        </div>
                        <div className="small-2 columns">
                            <TextField hintText="Needed XP" defaultValue={null} fullWidth={true}/>
                        </div>
                    </div>
                    <div className="small-4 columns">
                        {/*insert HP Component Here*/}
                    </div>
                </div>
                <div className="row">

                    <Tabs style={{marginTop: "20px"}}>
                        <Tab label="Character Info" >
                            <CharacterInfo params={this.props.params} state={this.state} onChange={this.handleInfoChange} />
                        </Tab>
                        <Tab label="Feats & Skills" >
                            <FeatsAndSkills params={this.props.params} state={this.state} onChange={this.handleSkillsChange} />
                        </Tab>
                        <Tab label="Armor & Weapons" >
                            <ArmorAndWeapons params={this.props.params} state={this.state} onChange={this.handleArmorChange} />
                        </Tab>
                        <Tab label="Inventory" >
                            <Inventory params={this.props.params} state={this.state} onChange={this.handleInventoryChange} />
                        </Tab>
                        <Tab label="Spells" >
                            <Spells params={this.props.params} state={this.state} onChange={this.handleSpellListChange} />
                        </Tab>
                        <Tab label="Notes & Contacts" >
                            <NotesAndContacts params={this.props.params} state={this.state} onChange={this.handleContactsChange} />
                        </Tab>
                    </Tabs>
                    {
                        /*
                         Tab Area Here
                         Character Info
                         Feats & Skills
                         Armor & Weapons
                         Inventory
                         Spells
                         Notes & Contacts
                         */
                    }
                </div>
            </div>
        );
    }
}