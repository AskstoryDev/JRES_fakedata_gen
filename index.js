const main = require('async-main').default;
const { faker } = require('@faker-js/faker');
const axios = require('axios');
require('dotenv').config()


console.log("test2 branch2222");

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


//UnWinder
const unWinder = () => 
{
    return {

        tension: faker.number.float({ min: 40.0, max: 250.0 })
    ,   tension_unit: "N" 
    ,   kwonchikyung: faker.number.int({ min: 100.0, max: 500.0 })
    ,   kwonchikyung_unit: "mm"
    ,   speed: faker.number.int({ min: 1.0, max: 25.0 })
    ,   speed_unit: "m/min"
    };
}


//CoaterHead
//생산speed production_speed
const coaterHead = () => 
{
    return {
        production_speed: faker.number.float({ min: 1.0, max: 25.0 })
    ,   production_speed_unit: "m/min" 
    ,   roll_speed: faker.number.float({ min: 1.0, max: 1000.0 })
    ,   roll_speed_unit: "rpm" 
    ,   nozzle_pressure: faker.number.float({ min: 0.1, max: 10.0 })
    ,   nozzle_pressure_unit: "kgf" 
    ,   liquid_pressure: faker.number.float({ min: 0.1, max: 10.0 })
    ,   liquid_pressure_unit: "kgf" 
    ,   gap_display: faker.number.float({ min: 1.0, max: 100.0 })
    ,   gap_display_unit: "um" 
    ,   mono_pump: faker.number.float({ min: 1.0, max: 1000.0 })
    ,   mono_unit: "rpm" 
    };
}


//Dryer
const dryer = () => 
{
    return {
        temp: faker.number.float({ min: 50.0, max: 200.0 })
    ,   temp_unit: "℃ " 
    ,   nmp_concentration: faker.number.float({ min: 50.0, max: 200.0 })
    ,   nmp_concentration_unit: "%" 
    };
}


//Coating out Feed
const coatingOutFeed = () => 
{
    return {
        areal_coverage: faker.number.float({ min: 1.0, max: 200.0 })
    ,   areal_coverage_unit: "mg/Cm2" 
    };
}




//Out Feed
const pressOutFeed = () => 
{
    return {

        tension: faker.number.float({ min: 40.0, max: 250.0 })
    ,   tension_unit: "N" 
    ,   coolant_temp: faker.number.float({ min: 10.0, max: 30.0 })
    ,   coolant_temp_unit: "℃ " 
    };
}



//ReWinder
const reWinder = () => 
{
    return {

        tension: faker.number.float({ min: 40.0, max: 250.0 })
    ,   tension_unit: "N" 
    ,   kwonchikyung: faker.number.int({ min: 100.0, max: 500.0 })
    ,   kwonchikyung_unit: "mm"
    };
}


//sliting ReWinder
const slitingRewinder = () => 
{
    return {

        upper_tension: faker.number.float({ min: 40.0, max: 250.0 })
    ,   upper_tension_unit: "N" 
    ,   lower_tension: faker.number.float({ min: 40.0, max: 250.0 })
    ,   lower_tension_unit: "N" 
    ,   upper_kwonchikyung: faker.number.int({ min: 100.0, max: 500.0 })
    ,   upper_kwonchikyung_unit: "mm"
    ,   lower_kwonchikyung: faker.number.int({ min: 100.0, max: 500.0 })
    ,   lower_kwonchikyung_unit: "mm"
    };
}





//Press
const press = () => 
{
    return {

        roll_temp: faker.number.float({ min: 0.0, max: 150.0 })
    ,   roll_temp_unit: "℃ " 
    ,   static_pressure: faker.number.int({ min: 0.0, max: 6200.0 })
    ,   static_pressure_unit: "kgf/CM"
    ,   back_pressure: faker.number.int({ min: 0.0, max: 6200.0 })
    ,   back_pressure_unit: "kgf/CM"
    ,   nip_pressure: faker.number.int({ min: 0.0, max: 6200.0 })
    ,   nip_pressure_unit: "kgf/CM"
    ,   production_speed: faker.number.float({ min: 0, max: 50.0 })
    ,   production_speed_unit: "m/min" 
    ,   gap_display: faker.number.float({ min: 1.0, max: 100.0 })
    ,   gap_display_unit: "um" 
    };
}










const send_data = async() => 
{
    await send_data_mixing(1);
    await send_data_mixing(2);

    await send_data_coating(1);
    await send_data_coating(2);

    await send_data_pressing(1);
    await send_data_pressing(2);

    await send_data_sliting(1);
    await send_data_sliting(2);
}



//음극공정은 process_type 1
//양극공정은 process_type 2
const send_data_mixing = async (process_type) => 
{
    const process_name              = "mixing";

    let powderInput1_data           = powderInput1();
    let powderInput1_topic          = `sfs/machine/${process_type}/${process_name}/pi1`

    let powderInput2_data           = powderInput2();
    let powderInput2_topic          = `sfs/machine/${process_type}/${process_name}/pi2`

    let powderInput3_data           = powderInput3();
    let powderInput3_topic          = `sfs/machine/${process_type}/${process_name}/pi3`

    await publish_result(powderInput1_topic,powderInput1_data);
    await publish_result(powderInput2_topic,powderInput2_data);
    await publish_result(powderInput3_topic,powderInput3_data);


    let storageHopper1_data         = storageHopper1();
    let storageHopper1_topic        = `sfs/machine/${process_type}/${process_name}/sh1`

    let storageHopper2_data         = storageHopper2();
    let storageHopper2_topic        = `sfs/machine/${process_type}/${process_name}/sh2`

    let storageHopper3_data         = storageHopper3();
    let storageHopper3_topic        = `sfs/machine/${process_type}/${process_name}/sh3`

    await publish_result(storageHopper1_topic,storageHopper1_data);
    await publish_result(storageHopper2_topic,storageHopper2_data);
    await publish_result(storageHopper3_topic,storageHopper3_data);


    let disCharge1_data             = disCharge1();
    let disCharge1_topic            = `sfs/machine/${process_type}/${process_name}/dc1`
    await publish_result(disCharge1_topic,disCharge1_data);


    let nmpTank1_data               = nmpTank1();
    let nmpTank1_topic              = `sfs/machine/${process_type}/${process_name}/nt1`

    await publish_result(nmpTank1_topic,nmpTank1_data);


    let binerMixer1_data            = binerMixer1()
    let binerMixer1_topic           = `sfs/machine/${process_type}/${process_name}/bm1`

    await publish_result(binerMixer1_topic,binerMixer1_data);

    let binerTank1_data             = binerTank1()
    let binerTank1_topic            = `sfs/machine/${process_type}/${process_name}/bt1`

    await publish_result(binerTank1_topic,binerTank1_data);

    let standardEquipment1_data     = standardEquipment1()
    let standardEquipment1_topic    = `sfs/machine/${process_type}/${process_name}/se1`

    await publish_result(standardEquipment1_topic,standardEquipment1_data);

    let cmcMixer1_data              = cmcMixer1()
    let cmcMixer1_topic             = `sfs/machine/${process_type}/${process_name}/cm1`

    await publish_result(cmcMixer1_topic,cmcMixer1_data);


    let cmcTank1_data               = cmcTank1()
    let cmcTank1_topic              = `sfs/machine/${process_type}/${process_name}/ct1`

    await publish_result(cmcTank1_topic,cmcTank1_data);

    let pdMixer1_data               = pdMixer1();
    let pdMixer1_topic              = `sfs/machine/${process_type}/${process_name}/pd1`

    await publish_result(pdMixer1_topic,pdMixer1_data);

    let pdMixer2_data               = pdMixer1(); //같이 사용
    let pdMixer2_topic              = `sfs/machine/${process_type}/${process_name}/pd2`

    await publish_result(pdMixer2_topic,pdMixer2_data);

    let storageTank1_data           = storageTank1();
    let storageTank1_topic          = `sfs/machine/${process_type}/${process_name}/st1`

    await publish_result(storageTank1_topic,storageTank1_data);

    let storageTank2_data           = storageTank1();
    let storageTank2_topic          = `sfs/machine/${process_type}/${process_name}/st2`

    await publish_result(storageTank2_topic,storageTank2_data);


}

const send_data_coating = async (process_type) => 
{
    const process_name = 'coating';

    let unwinder_data               = unWinder();
    let unwinder_topic              = `sfs/machine/${process_type}/${process_name}/uw1`

    await publish_result(unwinder_topic,unwinder_data);

    let coaterHead_data             = coaterHead();
    let coaterHead_topic            = `sfs/machine/${process_type}/${process_name}/ch1`

    await publish_result(coaterHead_topic,coaterHead_data);

    let dryer_data                  = dryer();
    let dryer_topic                 = `sfs/machine/${process_type}/${process_name}/dr1`

    await publish_result(dryer_topic,dryer_data);

    let outfeed_data                = coatingOutFeed();
    let outfeed_topic               = `sfs/machine/${process_type}/${process_name}/of1`

    await publish_result(outfeed_topic,outfeed_data);


    let rewinder_data                = reWinder();
    let rewinder_topic               = `sfs/machine/${process_type}/${process_name}/rw1`
    await publish_result(rewinder_topic,rewinder_data);
}


const send_data_pressing = async (process_type) => 
{
    const process_name = 'pressing';

    let unwinder_data               = unWinder();
    let unwinder_topic              = `sfs/machine/${process_type}/${process_name}/uw1`

    await publish_result(unwinder_topic,unwinder_data);


    let press_data                  = press();
    let press_topic                 = `sfs/machine/${process_type}/${process_name}/pd1`

    await publish_result(press_topic,press_data);

    let outfeed_data                = pressOutFeed();
    let outfeed_topic               = `sfs/machine/${process_type}/${process_name}/of1`

    await publish_result(outfeed_topic,outfeed_data);


    let rewinder_data                = reWinder();
    let rewinder_topic               = `sfs/machine/${process_type}/${process_name}/rw1`
    await publish_result(rewinder_topic,rewinder_data);
}


const knife = () => 
{
    return {

        lower_speed_ratio: faker.number.float({ min: 0.0, max: 100.0 })
    ,   lower_speed_ratio_unit: "%" 
    ,   upper_speed_ratio: faker.number.float({ min: 0.0, max: 100.0 })
    ,   upper_speed_ratio_unit: "%" 
    ,   lower_diameter: faker.number.float({ min: 60.0, max: 70.0 })
    ,   lower_diameter_unit: "mm" 
    ,   upper_diameter: faker.number.float({ min: 125.0, max: 130.0 })
    ,   upper_diameter_unit: "mm" 
    ,   production_speed: faker.number.float({ min: 0, max: 50.0 })
    ,   production_speed_unit: "m/min" 
    ,   dust_collector_pressure: faker.number.float({ min: 0.0, max: 10.0 })
    ,   dust_collector_pressure_unit: "kgf" 
    };
    
}

const send_data_sliting = async (process_type) => 
{
    const process_name = 'sliting';

    let unwinder_data               = unWinder();
    let unwinder_topic              = `sfs/machine/${process_type}/${process_name}/uw1`

    await publish_result(unwinder_topic,unwinder_data);


    let knife_data                  = knife();
    let knife_topic                 = `sfs/machine/${process_type}/${process_name}/kn1`

    await publish_result(knife_topic,knife_data);


    let rewinder_data                = slitingRewinder();
    let rewinder_topic               = `sfs/machine/${process_type}/${process_name}/rw1`
    await publish_result(rewinder_topic,rewinder_data);
}








main(async () => 
{
    await send_data();
})
