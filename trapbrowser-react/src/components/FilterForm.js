// Modal form component that users will set their filters.
import { useState } from 'react';
import ReactModal from 'react-modal';
export default function FilterForm({childSetMandatory, childSetOptional, childSetSort}) {

    function formReset() {
        document.getElementById("filterForm").reset();
    }
    // modal visibility state and toggle
    const [isModalOpen, setisModalOpen] = useState(false);

    function openModal() {
        setisModalOpen(true);
        document.body.style.overflow = 'hidden';
    }

    function updateAll() {

        setisModalOpen(false)
        document.body.style.overflow = 'unset';

        let min_power_value = document.getElementById('min_power').value;
        let max_power_value = document.getElementById('max_power').value;
        let min_power_bonus_value = document.getElementById('min_power_bonus').value / 100;

        childSetMandatory({
            min_power: {min_power_value},
            max_power: {max_power_value},
            min_power_bonus: {min_power_bonus_value},
            max_power_bonus: 1,
            min_attr_bonus: 0,
            max_attr_bonus: 1,
            min_luck: 0,
            max_luck: 500,
            min_title_req: 0,
            max_title_req: 15,
            min_cheese_effect: 0,
            max_cheese_effect: 12,
        })

        console.log("setting to" + {
            min_power: {min_power_value},
            max_power: {max_power_value},
            min_power_bonus: {min_power_bonus_value},
            max_power_bonus: 1,
            min_attr_bonus: 0,
            max_attr_bonus: 1,
            min_luck: 0,
            max_luck: 500,
            min_title_req: 0,
            max_title_req: 15,
            min_cheese_effect: 0,
            max_cheese_effect: 12,
        })

    }

    return (
        <>
            <button className="filter-button" onClick={openModal}>
                Filter and Sort
            </button>

            <ReactModal
                isOpen={isModalOpen}
                className="modal-form"
                closeTimeoutMS={500}
                style={
                    {
                        overlay: {
                            background: "rgba(0, 0, 0, 0.5)",
                            overflowY: "scroll"
                        },
                        content: {
                        }
                    }
                }
                shouldCloseOnOverlayClick={true}
            >
                <form id="filterForm">

                    <fieldset className="form-power-selection">
                        <legend>Power Type</legend>
                        <input className="form-check-input" type="checkbox" id="formCheck-1" /><label className="form-check-label" for="formCheck-1">Arcane</label>
                        <input className="form-check-input" type="checkbox" id="formCheck-2" /><label className="form-check-label" for="formCheck-2">Draconic</label>
                        <input className="form-check-input" type="checkbox" id="formCheck-9" /><label className="form-check-label" for="formCheck-9">Forgotten</label>
                        <input className="form-check-input" type="checkbox" id="formCheck-8" /><label className="form-check-label" for="formCheck-8">Hydro</label>
                        <input className="form-check-input" type="checkbox" id="formCheck-7" /><label className="form-check-label" for="formCheck-7">Law</label>
                        <input className="form-check-input" type="checkbox" id="formCheck-6" /><label className="form-check-label" for="formCheck-6">Parental</label>
                        <input className="form-check-input" type="checkbox" id="formCheck-5" /><label className="form-check-label" for="formCheck-5">Physical</label>
                        <input className="form-check-input" type="checkbox" id="formCheck-4" /><label className="form-check-label" for="formCheck-4">Rift</label>
                        <input className="form-check-input" type="checkbox" id="formCheck-3" /><label className="form-check-label" for="formCheck-3">Shadow</label>
                        <input className="form-check-input" type="checkbox" id="formCheck-10" /><label className="form-check-label" for="formCheck-10">Tactical</label>
                    </fieldset>

                    <fieldset>
                        <legend>Power</legend>
                        <label className="form-label" for="min_power">Minimum power</label>
                        <input className="form-range" type="range" name="min_power" id="min_power" min="0" max="20000" step="100" defaultValue="0" />
                        <output id="min_power_value"></output>

                        <label className="form-label" for="max_power">Maximum power</label>
                        <input className="form-range" type="range" name="max_power" id="max_power" min="0" max="20000" defaultValue="20000" />
                        <output id="max_power_value"></output>
                    </fieldset>

                    <fieldset>
                        <legend>Power Bonus</legend>
                        <label className="form-label" for="min_power_bonus">Minimum power bonus</label>
                        <input className="form-range" type="range" name="min_power_bonus" id="min_power_bonus" min="0" max="100" step="1" defaultValue="0" />
                        <output id="min_power_bonus_value"></output>

                        <label className="form-label" for="min_power">Maximum power bonus</label>
                        <input className="form-range" type="range" name="max_power_bonus" id="max_power_bonus" min="0" max="100" step="1" defaultValue="100" />
                        <output id="max_power_bonus_value"></output>
                    </fieldset>

                    <fieldset>
                        <legend>Attraction Bonus</legend>
                        <label className="form-label" for="min_power">Minimum attraction bonus</label>
                        <input className="form-range" type="range" name="min_attr_bonus" min="0" max="100" defaultValue="0" />
                        <output id="min_power_value"></output>

                        <label className="form-label" for="min_power">Maximum attraction bonus</label>
                        <input className="form-range" type="range" name="max_attr_bonus" min="0" max="100" defaultValue="100" />
                        <output id="min_power_value"></output>
                    </fieldset>

                    <fieldset>
                        <legend>Luck</legend>

                        <label className="form-label" for="min_power">Minimum luck</label>
                        <input className="form-range" type="range" name="min_luck" min="0" max="100" defaultValue="0" />
                        <output id="min_power_value"></output>

                        <label className="form-label" for="max_luck">Maximum luck</label>
                        <input className="form-range" type="range" name="max_luck" min="0" max="100" defaultValue="100" />
                        <output id="min_power_value"></output>
                    </fieldset>

                    <div className="form-other-controls">
                        <label className="form-label" for="min_power">Lowest title needed</label>
                        <select defaultValue={"0"}>
                            <option value="0">Novice</option>
                            <option value="1">Recruit</option>
                            <option value="2">Apprentice</option>
                            <option value="3">Initiate</option>
                            <option value="4">Journeyman/Journeywomen</option>
                            <option value="5">Master</option>
                            <option value="6">Grandmaster</option>
                            <option value="7">Legendary</option>
                            <option value="8">Hero</option>
                            <option value="9">Knight</option>
                            <option value="10">Lord/Lady</option>
                            <option value="11">Baron/Baroness</option>
                            <option value="12">Count/Countess</option>
                            <option value="13">Duke/Duchess</option>
                            <option value="14">Grand Duke/Duchess</option>
                            <option value="15">Archduke/Archduchess</option>
                            <option value="16">Viceroy</option>
                            <option value="17">Elder</option>
                            <option value="18">Sage</option>
                            <option value="19">Fabled</option>
                        </select>

                        <label className="form-label" for="min_power">Highest title needed</label>
                        <select>
                            <option value="19" selected="">Fabled</option>
                            <option value="18">Sage</option>
                            <option value="17">Elder</option>
                            <option value="16">Viceroy</option>
                            <option value="15">Archduke/Archduchess</option>
                            <option value="14">Grand Duke/Duchess</option>
                            <option value="13">Duke/Duchess</option>
                            <option value="12">Count/Countess</option>
                            <option value="11">Baron/Baroness</option>
                            <option value="10">Lord/Lady</option>
                            <option value="9">Knight</option>
                            <option value="8">Hero</option>
                            <option value="7">Legendary</option>
                            <option value="6">Grandmaster</option>
                            <option value="5">Master</option>
                            <option value="4">Journeyman/Journeywomen</option>
                            <option value="3">Initiate</option>
                            <option value="2">Apprentice</option>
                            <option value="1">Recruit</option>
                            <option value="0">Novice</option>
                        </select>

                        <label className="form-label">Lowest cheese effect</label>
                        <select>
                            <option value="-6" selected="">Über Stale</option>
                            <option value="-5">Ultimately Stale</option>
                            <option value="-4">Insanely Stale</option>
                            <option value="-3">Extremely Stale</option>
                            <option value="-2">Very Stale</option>
                            <option value="-1">Stale</option>
                            <option value="0">No cheese effect</option>
                            <option value="1">Fresh</option>
                            <option value="2">Very Fresh</option>
                            <option value="3">Extremely Fresh</option>
                            <option value="4">Insanely Fresh</option>
                            <option value="5">Ultimately Fresh</option>
                            <option value="6">Über Fresh</option>
                        </select>

                        <label className="form-label">Highest cheese effect</label>
                        <select>
                            <option value="6" selected="">Über Fresh</option>
                            <option value="5">Ultimately Fresh</option>
                            <option value="4">Insanely Fresh</option>
                            <option value="3">Extremely Fresh</option>
                            <option value="2">Very Fresh</option>
                            <option value="1">Fresh</option>
                            <option value="0">No cheese effect</option>
                            <option value="-1">Stale</option>
                            <option value="-2">Very Stale</option>
                            <option value="-3">Extremely Stale</option>
                            <option value="-4">Insanely Stale</option>
                            <option value="-5">Ultimately Stale</option>
                            <option value="-6">Über Stale</option>
                        </select>

                        <label className="form-label">Limited Edition?</label>
                        <select>
                            <option value="&quot;any&quot;" selected="">Any</option>
                            <option value="true">Limited edition only</option>
                            <option value="false">Not limited edition</option>
                        </select>

                    </div>

                    <div className="form-buttons">
                        <button type="button" onClick={updateAll}>Apply</button>
                        <button type="button" onClick={formReset}>Reset Filters</button>
                    </div>
                </form>
            </ReactModal>
        </>
    )

}