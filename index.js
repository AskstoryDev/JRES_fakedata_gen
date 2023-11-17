const main = require('async-main').default;
const { faker } = require('@faker-js/faker');
const axios = require('axios');
require('dotenv').config()

const publish_topic = async (data) =>
{
    //console.log('data:', data);
    try
    {
        let string_data = JSON.stringify(data);
        let params =
        {
            method: 'POST',
            auth: { username: process.env.MQTT_API_USERNAME, password: process.env.MQTT_API_PASSWORD },
            url: 'http://i1.askstoryboard.com:18083/api/v5/publish',
            headers: { 'Content-Type': 'application/json' },
            data : string_data
        };
        await axios(params);
    }
    catch (err)
    {
        // Handle Error Here
        console.error(err);
    }
}


// const get_topic_value = (topic,index) =>
// {
//     if(!topic) return '';
//
//     let temp_array = topic.split("/");
//     if(index <= temp_array.length)
//         return temp_array[index];
//
//     return '';
// }
//

const publish_result = async(topic,payload) =>
{
    console.log("topic =>",topic);
    payload = JSON.stringify(payload);
    let data =
    {
        "payload_encoding": "plain"
    ,   "topic": topic
    ,   "qos": 0
    ,   "payload": payload
    ,   "retain": false
    }
    await publish_topic(data);
}



//분체투입1 
const powderInput1 = () => 
{
    return {
        dust_collector: faker.number.int({ min: 0, max: 1 })
    ,   dust_collector_unit: ""
    };
}
//분체투입2 
const powderInput2 = () => 
{
    return {
        dust_collector: faker.number.int({ min: 0, max: 1 })
    ,   dust_collector_unit: ""
    };
}

//분체투입3 
const powderInput3 = () => 
{
    return {
        dust_collector: faker.number.int({ min: 0, max: 1 })
    ,   dust_collector_unit: ""
    };
}






//Storage Hopper 1
const storageHopper1 = () => 
{
    return {
        load_cell: faker.number.int({ min: 0, max: 1 })
    ,   load_cell_unit: "kg"
    ,   press: faker.number.int({ min: 0, max: 10000 })
    ,   press_unit: "kgf"
    ,   dust_collector: faker.number.int({ min: 0, max: 1 })
    ,   dust_collector_unit: ""
    ,   rotary_valve: faker.number.int({ min: 0, max: 1 })
    ,   rotary_valve_unit: ""
    };

}

//Storage Hopper 2
const storageHopper2 = () => 
{
    return {
        load_cell: faker.number.int({ min: 0, max: 1 })
    ,   load_cell_unit: "kg"
    ,   press: faker.number.int({ min: 0, max: 10000 })
    ,   press_unit: "kgf"
    ,   dust_collector: faker.number.int({ min: 0, max: 1 })
    ,   dust_collector_unit: ""
    ,   rotary_valve: faker.number.int({ min: 0, max: 1 })
    ,   rotary_valve_unit: ""
    };

}

//Storage Hopper 3
const storageHopper3 = () => 
{
    return {
        load_cell: faker.number.int({ min: 0, max: 1 })
    ,   load_cell_unit: "kg"
    ,   press: faker.number.int({ min: 0, max: 10000 })
    ,   press_unit: "kgf"
    ,   dust_collector: faker.number.int({ min: 0, max: 1 })
    ,   dust_collector_unit: ""
    ,   rotary_valve: faker.number.int({ min: 0, max: 1 })
    ,   rotary_valve_unit: ""
    };

}

//Discharge1
const disCharge1 = () => 
{
    return {
        load_cell: faker.number.int({ min: 0, max: 1 })
    ,   load_cell_unit: "kg"
    ,   press: faker.number.int({ min: 0, max: 10000 })
    ,   press_unit: "bar"
    ,   dust_collector: faker.number.int({ min: 0, max: 1 })
    ,   dust_collector_unit: ""
    ,   rotary_valve: faker.number.int({ min: 0, max: 1 })
    ,   rotary_valve_unit: ""
    };

}

//nmp tank1
/*
토출량 : pumpoutput
*/
const nmpTank1 = () => 
{
    return {
        level: faker.number.int({ min: 0, max: 10000 })
    ,   load_cell_unit: "kg"
    ,   press: faker.number.int({ min: 0, max: 10000 })
    ,   press_unit: "bar"
    ,   nmp_pump_output: faker.number.int({ min: 0, max: 5000 })
    ,   nmp_pump_output_unit: "kg"
    ,   supply_pump: faker.number.int({ min: 0, max: 1 })
    ,   supply_pump_unit: ""
    ,   nmp_leak_sensor: faker.number.int({ min: 0, max: 1 })
    ,   nmp_leak_sensor: ""
    };

}


//Biner Mixer
/*
전류치 : current
*/
const binerMixer1 = () => 
{
    return {
        nmp_pump_input: faker.number.int({ min: 0, max: 5000 })
    ,   nmp_pump_input_unit: "kg"
    ,   blade_rpm: faker.number.int({ min: 0, max: 100 })
    ,   blade_rpm_unit: "rpm" 
    ,   blade_current: faker.number.int({ min: 0, max: 500 })
    ,   blade_current_unit: "A"
    };
}

//Biner Tank
const binerTank1 = () => 
{
    return {
        blade_rpm: faker.number.int({ min: 0, max: 100 })
    ,   blade_rpm_unit: "rpm" 
    ,   tank_level: faker.number.int({ min: 0, max: 5000 })
    ,   tank_level_unit: "kg"
    };
}

//Standard Equipment 순수제조설비
// 원수 투입량 : raw_water_input
const standardEquipment1 = () => 
{
    return {
        raw_water_input: faker.number.int({ min: 0, max: 5000 })
    ,   raw_water_input_unit: "kg" 
    ,   ro_throughput: faker.number.int({ min: 0, max: 5000 })
    ,   ro_throughput_unit: "kg"
    ,   edi_throughput: faker.number.int({ min: 0, max: 5000 })
    ,   edi_throughput_unit: "kg"
    ,   pureion_conductivity: faker.number.int({ min: 0, max: 5000 })
    ,   pureion_conductivity_unit: "㎲/cm"
    ,   tank_level: faker.number.int({ min: 0, max: 5000 })
    ,   tank_level_unit: "kg"
    ,   supply_pump: faker.number.int({ min: 0, max: 1 })
    ,   supply_pump_unit: ""
    };
}

//CMC Mixer
const cmcMixer1 = () => 
{
    return {

        nmp_pump_input: faker.number.int({ min: 0, max: 5000 })
    ,   nmp_pump_input_unit: "kg"
    ,   pure_input: faker.number.int({ min: 0, max: 5000 })
    ,   pure_input_unit: "kg" 
    ,   blade_rpm: faker.number.int({ min: 0, max: 100 })
    ,   blade_rpm_unit: "rpm" 
    ,   blade_current: faker.number.int({ min: 0, max: 500 })
    ,   blade_current_unit: "A"
    ,   despa_rpm: faker.number.int({ min: 0, max: 100 })
    ,   despa_rpm_unit: "rpm" 
    ,   despa_current: faker.number.int({ min: 0, max: 500 })
    ,   despa_current_unit: "A"
    ,   supply_pump_unit: ""
    };
}

//CMC tank
const cmcTank1 = () => 
{
    return {

        blade_rpm: faker.number.int({ min: 0, max: 100 })
    ,   blade_rpm_unit: "rpm" 
    ,   tank_level: faker.number.int({ min: 0, max: 5000 })
    ,   tank_level_unit: "kg"
    };
}


//PD Mixer1
/*
활물질  :active_material
바인더  :binder
도전제  :conductive_agent
*/
const pdMixer1 = () => 
{
    return {

        active_material_input: faker.number.int({ min: 0, max: 10000 })
    ,   active_material_unit: "kg"
    ,   binder_input: faker.number.int({ min: 0, max: 5000 })
    ,   binder_input_unit: "kg" 
    ,   cmc_input: faker.number.int({ min: 0, max: 5000 })
    ,   cmc_input_unit: "kg" 
    ,   conductive_agent_input: faker.number.int({ min: 0, max: 5000 })
    ,   conductive_agent_input_unit: "kg" 
    ,   nmp_pump_input: faker.number.int({ min: 0, max: 5000 })
    ,   nmp_pump_input_unit: "kg"
    ,   pure_input: faker.number.int({ min: 0, max: 5000 })
    ,   pure_input_unit: "kg" 
    ,   press: faker.number.int({ min: 0, max: 20 })
    ,   press_unit: "kgf"
    ,   planetry_rpm: faker.number.int({ min: 0, max: 100 })
    ,   planetry_unit: "rpm" 
    ,   planetry_current: faker.number.int({ min: 0, max: 500 })
    ,   planetry_current: "rpm" 
    ,   despa_rpm: faker.number.int({ min: 0, max: 100 })
    ,   despa_rpm_unit: "rpm" 
    ,   despa_current: faker.number.int({ min: 0, max: 500 })
    ,   despa_current_unit: "A"
    };
}


//Storage Tank1
/*
*/
const storageTank1 = () => 
{
    return {

        blade_rpm: faker.number.int({ min: 0, max: 100 })
    ,   blade_rpm_unit: "rpm" 
    ,   press: faker.number.int({ min: 0, max: 20 })
    ,   press_unit: "kgf"
    ,   tank_level: faker.number.int({ min: 0, max: 5000 })
    ,   tank_level_unit: "kg"
    };
}











//음극공정은 process_type 1
//양극공정은 process_type 2
const send_data = async (process_type,process_name) => 
{
    let powderInput1_data   = powderInput1();
    let powderInput1_topic  = `sfs/machine/${process_type}/${process_name}/pi1`

    let powderInput2_data   = powderInput2();
    let powderInput2_topic  = `sfs/machine/${process_type}/${process_name}/pi2`

    let powderInput3_data   = powderInput3();
    let powderInput3_topic  = `sfs/machine/${process_type}/${process_name}/pi3`

    await publish_result(powderInput1_topic,powderInput1_data);
    await publish_result(powderInput2_topic,powderInput2_data);
    await publish_result(powderInput3_topic,powderInput3_data);





    let storageHopper1_data = storageHopper1();
    let storageHopper1_topic = `sfs/machine/${process_type}/${process_name}/sh1`

    let storageHopper2_data = storageHopper2();
    let storageHopper2_topic = `sfs/machine/${process_type}/${process_name}/sh2`

    let storageHopper3_data = storageHopper3();
    let storageHopper3_topic = `sfs/machine/${process_type}/${process_name}/sh3`


    await publish_result(storageHopper1_topic,storageHopper1_data);
    await publish_result(storageHopper2_topic,storageHopper2_data);
    await publish_result(storageHopper3_topic,storageHopper3_data);


    let disCharge1_data = disCharge1();
    let disCharge1_topic = `sfs/machine/${process_type}/${process_name}/dc1`

    await publish_result(disCharge1_topic,disCharge1_data);

    let nmpTank1_data = nmpTank1();
    let nmpTank1_topic = `sfs/machine/${process_type}/${process_name}/nt1`

    await publish_result(nmpTank1_topic,nmpTank1_data);


    let binerMixer1_data = binerMixer1()
    let binerMixer1_topic = `sfs/machine/${process_type}/${process_name}/bm1`

    await publish_result(binerMixer1_topic,binerMixer1_data);

    let binerTank1_data = binerTank1()
    let binerTank1_topic = `sfs/machine/${process_type}/${process_name}/bt1`

    await publish_result(binerTank1_topic,binerTank1_data);

    let standardEquipment1_data = standardEquipment1()
    let standardEquipment1_topic = `sfs/machine/${process_type}/${process_name}/se1`

    await publish_result(standardEquipment1_topic,standardEquipment1_data);

    let cmcMixer1_data = cmcMixer1()
    let cmcMixer1_topic = `sfs/machine/${process_type}/${process_name}/cm1`

    await publish_result(cmcMixer1_topic,cmcMixer1_data);


    let cmcTank1_data = cmcTank1()
    let cmcTank1_topic = `sfs/machine/${process_type}/${process_name}/ct1`

    await publish_result(cmcTank1_topic,cmcTank1_data);


    let pdMixer1_data = pdMixer1();
    let pdMixer1_topic =  `sfs/machine/${process_type}/${process_name}/pd1`

    await publish_result(pdMixer1_topic,pdMixer1_data);

    let pdMixer2_data = pdMixer1(); //같이 사용
    let pdMixer2_topic =  `sfs/machine/${process_type}/${process_name}/pd2`

    await publish_result(pdMixer2_topic,pdMixer2_data);

    let storageTank1_data = storageTank1();
    let storageTank1_topic =  `sfs/machine/${process_type}/${process_name}/st1`

    await publish_result(storageTank1_topic,storageTank1_data);

    let storageTank2_data = storageTank1();
    let storageTank2_topic =  `sfs/machine/${process_type}/${process_name}/st2`

    await publish_result(storageTank2_topic,storageTank2_data);
























}








main(async () => 
{

    await send_data(1,"mixing");
    await send_data(2,"mixing");
    // Do stuff
})
