const main = require("async-main").default;
const { faker } = require("@faker-js/faker");
const axios = require("axios");
require("dotenv").config();

//url: 'http://i1.askstoryboard.com:18083/api/v5/publish',
const publish_topic = async (data) => {
    //console.log('data:', data);
    try {
        let string_data = JSON.stringify(data);
        let params = {
            method: "POST",
            auth: { username: process.env.MQTT_API_USERNAME, password: process.env.MQTT_API_PASSWORD },
            url: "http://i1.askstoryboard.com:18083/api/v5/publish",
            headers: { "Content-Type": "application/json" },
            data: string_data
        };
        await axios(params);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

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

const publish_result = async (topic, payload) => {

    topic = topic.trim();
    console.log(topic);

    //console.log("machine_data['",topic,']=',payload);
    payload = JSON.stringify(payload);
    let data = {
        payload_encoding: "plain",
        topic: topic,
        qos: 0,
        payload: payload,
        retain: false
    };
    await publish_topic(data);
};

//분체투입1
const powderInput1 = () => {
    return {
        dust_collector: faker.number.int({ min: 0, max: 1 }),
        dust_collector_unit: ""
    };
};
//분체투입2
const powderInput2 = () => {
    return {
        dust_collector: faker.number.int({ min: 0, max: 1 }),
        dust_collector_unit: ""
    };
};

//분체투입3
const powderInput3 = () => {
    return {
        dust_collector: faker.number.int({ min: 0, max: 1 }),
        dust_collector_unit: ""
    };
};

//Storage Hopper 1
const storageHopper1 = () => {
    return {
        load_cell: faker.number.int({ min: 3000, max: 3200 }),
        load_cell_unit: "kg",
        press: faker.number.int({ min: 5000, max: 5300 }),
        press_unit: "kgf",
        dust_collector: faker.number.int({ min: 0, max: 1 }),
        dust_collector_unit: "",
        rotary_valve: faker.number.int({ min: 0, max: 1 }),
        rotary_valve_unit: ""
    };
};

//Storage Hopper 2
const storageHopper2 = () => {
    return {
        load_cell: faker.number.int({ min: 3000, max: 3200 }),
        load_cell_unit: "kg",
        press: faker.number.int({ min: 5000, max: 5300 }),
        press_unit: "kgf",
        dust_collector: faker.number.int({ min: 0, max: 1 }),
        dust_collector_unit: "",
        rotary_valve: faker.number.int({ min: 0, max: 1 }),
        rotary_valve_unit: ""
    };
};

//Storage Hopper 3
const storageHopper3 = () => {
    return {
        load_cell: faker.number.int({ min: 3000, max: 3200 }),
        load_cell_unit: "kg",
        press: faker.number.int({ min: 5000, max: 5300 }),
        press_unit: "kgf",
        dust_collector: faker.number.int({ min: 0, max: 1 }),
        dust_collector_unit: "",
        rotary_valve: faker.number.int({ min: 0, max: 1 }),
        rotary_valve_unit: ""
    };
};

//Discharge1
const disCharge1 = () => {
    return {
        load_cell: faker.number.int({ min: 3000, max: 3200 }),
        load_cell_unit: "kg",
        press: faker.number.int({ min: 5000, max: 5300 }),
        press_unit: "bar",
        dust_collector: faker.number.int({ min: 0, max: 1 }),
        dust_collector_unit: "",
        rotary_valve: faker.number.int({ min: 0, max: 1 }),
        rotary_valve_unit: ""
    };
};

//nmp tank1
/*
토출량 : pumpoutput
*/
const nmpTank1 = () => {
    return {
        level: faker.number.int({ min: 3000, max: 3010 }),
        level_unit: "kg",
        press: faker.number.int({ min: 2000, max: 2100 }),
        press_unit: "bar",
        nmp_pump_output: faker.number.int({ min: 3000, max: 3010 }),
        nmp_pump_output_unit: "kg",
        supply_pump: faker.number.int({ min: 0, max: 1 }),
        supply_pump_unit: "",
        nmp_leak_sensor: faker.number.int({ min: 0, max: 1 }),
        nmp_leak_sensor: ""
    };
};

//Biner Mixer
/*
전류치 : current
*/
const binerMixer1 = () => {
    return {
        nmp_pump_input: faker.number.int({ min: 2000, max: 2020 }),
        nmp_pump_input_unit: "kg",
        blade_rpm: faker.number.int({ min: 50, max: 70 }),
        blade_rpm_unit: "rpm",
        blade_current: faker.number.int({ min: 150, max: 170 }),
        blade_current_unit: "A",
        despa_rpm: faker.number.int({ min: 2000, max: 2200 }),
        despa_rpm_unit: "rpm",
        despa_current: faker.number.int({ min: 200, max: 210 }),
        despa_current_unit: "A"
    };
};

//Biner Tank
const binerTank1 = () => {
    return {
        blade_rpm: faker.number.int({ min: 50, max: 70 }),
        blade_rpm_unit: "rpm",
        tank_level: faker.number.int({ min: 1200, max: 1220 }),
        tank_level_unit: "kg"
    };
};

//Standard Equipment 순수제조설비
// 원수 투입량 : raw_water_input
const standardEquipment1 = () => {
    return {
        raw_water_input: faker.number.int({ min: 3300, max: 3310 }),
        raw_water_input_unit: "kg",
        ro_throughput: faker.number.int({ min: 1100, max: 1120 }),
        ro_throughput_unit: "kg",
        edi_throughput: faker.number.int({ min: 2000, max: 2020 }),
        edi_throughput_unit: "kg",
        pureion_conductivity: faker.number.int({ min: 2000, max: 2030 }),
        pureion_conductivity_unit: "㎲/cm",
        tank_level: faker.number.int({ min: 1200, max: 1220 }),
        tank_level_unit: "kg",
        supply_pump: faker.number.int({ min: 0, max: 1 }),
        supply_pump_unit: ""
    };
};

//CMC Mixer
const cmcMixer1 = () => {
    return {
        nmp_pump_input: faker.number.int({ min: 2000, max: 2020 }),
        nmp_pump_input_unit: "kg",
        pure_input: faker.number.int({ min: 50, max: 60 }),
        pure_input_unit: "kg",
        blade_rpm: faker.number.int({ min: 60, max: 69 }),
        blade_rpm_unit: "rpm",
        blade_current: faker.number.int({ min: 100, max: 110 }),
        blade_current_unit: "A",
        despa_rpm: faker.number.int({ min: 80, max: 85 }),
        despa_rpm_unit: "rpm",
        despa_current: faker.number.int({ min: 200, max: 203 }),
        despa_current_unit: "A",
        supply_pump_unit: ""
    };
};

//CMC tank
const cmcTank1 = () => {
    return {
        blade_rpm: faker.number.int({ min: 20, max: 25 }),
        blade_rpm_unit: "rpm",
        tank_level: faker.number.int({ min: 2200, max: 2208 }),
        tank_level_unit: "kg"
    };
};

//PD Mixer1
/*
활물질  :active_material
바인더  :binder
도전제  :conductive_agent
*/
const pdMixer1 = () => {
    return {
        active_material_input: faker.number.int({ min: 3000, max: 3020 }),
        active_material_unit: "kg",
        binder_input: faker.number.int({ min: 1100, max: 1108 }),
        binder_input_unit: "kg",
        cmc_input: faker.number.int({ min: 3030, max: 3037 }),
        cmc_input_unit: "kg",
        conductive_agent_input: faker.number.int({ min: 2020, max: 2023 }),
        conductive_agent_input_unit: "kg",
        nmp_pump_input: faker.number.int({ min: 700, max: 707 }),
        nmp_pump_input_unit: "kg",
        pure_input: faker.number.int({ min: 900, max: 909 }),
        pure_input_unit: "kg",
        press: faker.number.int({ min: 10, max: 16 }),
        press_unit: "kgf",
        planetry_rpm: faker.number.int({ min: 77, max: 79 }),
        planetry_unit: "rpm",
        planetry_current: faker.number.int({ min: 310, max: 313 }),
        planetry_current: "rpm",
        despa_rpm: faker.number.int({ min: 87, max: 89 }),
        despa_rpm_unit: "rpm",
        despa_current: faker.number.int({ min: 120, max: 127 }),
        despa_current_unit: "A"
    };
};

//Storage Tank1
/*
 */
const storageTank1 = () => {
    return {
        blade_rpm: faker.number.int({ min: 0, max: 100 }),
        blade_rpm_unit: "rpm",
        press: faker.number.int({ min: 0, max: 20 }),
        press_unit: "kgf",
        tank_level: faker.number.int({ min: 0, max: 5000 }),
        tank_level_unit: "kg"
    };
};

//음극공정은 process_type 1
//양극공정은 process_type 2
const send_data = async (process_type, process_name) => {
    let powderInput1_data = powderInput1();
    let powderInput1_topic = `sfs/machine/${process_type}/${process_name}/pi1`;

    let powderInput2_data = powderInput2();
    let powderInput2_topic = `sfs/machine/${process_type}/${process_name}/pi2`;

    let powderInput3_data = powderInput3();
    let powderInput3_topic = `sfs/machine/${process_type}/${process_name}/pi3`;

    await publish_result(powderInput1_topic, powderInput1_data);
    await publish_result(powderInput2_topic, powderInput2_data);
    await publish_result(powderInput3_topic, powderInput3_data);

    let storageHopper1_data = storageHopper1();
    let storageHopper1_topic = `sfs/machine/${process_type}/${process_name}/sh1`;

    let storageHopper2_data = storageHopper2();
    let storageHopper2_topic = `sfs/machine/${process_type}/${process_name}/sh2`;

    let storageHopper3_data = storageHopper3();
    let storageHopper3_topic = `sfs/machine/${process_type}/${process_name}/sh3`;

    await publish_result(storageHopper1_topic, storageHopper1_data);
    await publish_result(storageHopper2_topic, storageHopper2_data);
    await publish_result(storageHopper3_topic, storageHopper3_data);

    let disCharge1_data = disCharge1();
    let disCharge1_topic = `sfs/machine/${process_type}/${process_name}/dc1`;

    await publish_result(disCharge1_topic, disCharge1_data);

    let nmpTank1_data = nmpTank1();
    let nmpTank1_topic = `sfs/machine/${process_type}/${process_name}/nt1`;

    await publish_result(nmpTank1_topic, nmpTank1_data);

    let binerMixer1_data = binerMixer1();
    let binerMixer1_topic = `sfs/machine/${process_type}/${process_name}/bm1`;

    await publish_result(binerMixer1_topic, binerMixer1_data);

    let binerTank1_data = binerTank1();
    let binerTank1_topic = `sfs/machine/${process_type}/${process_name}/bt1`;

    await publish_result(binerTank1_topic, binerTank1_data);

    let standardEquipment1_data = standardEquipment1();
    let standardEquipment1_topic = `sfs/machine/${process_type}/${process_name}/se1`;

    await publish_result(standardEquipment1_topic, standardEquipment1_data);

    let cmcMixer1_data = cmcMixer1();
    let cmcMixer1_topic = `sfs/machine/${process_type}/${process_name}/cm1`;

    await publish_result(cmcMixer1_topic, cmcMixer1_data);

    let cmcTank1_data = cmcTank1();
    let cmcTank1_topic = `sfs/machine/${process_type}/${process_name}/ct1`;

    await publish_result(cmcTank1_topic, cmcTank1_data);

    let pdMixer1_data = pdMixer1();
    let pdMixer1_topic = `sfs/machine/${process_type}/${process_name}/pd1`;

    await publish_result(pdMixer1_topic, pdMixer1_data);

    let pdMixer2_data = pdMixer1(); //같이 사용
    let pdMixer2_topic = `sfs/machine/${process_type}/${process_name}/pd2`;

    await publish_result(pdMixer2_topic, pdMixer2_data);

    let storageTank1_data = storageTank1();
    let storageTank1_topic = `sfs/machine/${process_type}/${process_name}/st1`;

    await publish_result(storageTank1_topic, storageTank1_data);

    let storageTank2_data = storageTank1();
    let storageTank2_topic = `sfs/machine/${process_type}/${process_name}/st2`;

    await publish_result(storageTank2_topic, storageTank2_data);
};



//양극슬리팅
/*
온도
습도
미세먼지
초미세먼지
CO2
 */

const getRandomAirQualityValue = () => 
{
    return {
        Temperature: faker.number.int({ min: 23, max:25  }),
        Temperature_unit: "°C",
        Humidity: faker.number.int({ min: 30, max:33  }),
        Humidity_unit: "%",
        PM10: faker.number.int({ min: 10, max:12  }),
        PM10_unit: "㎍/㎥",
        PM2_5: faker.number.int({ min: 5, max:8  }),
        PM2_5_unit: "㎍/㎥",
        CO2: faker.number.int({ min: 950, max:1100  }),
        CO2_unit: "ppm"
    };

}

const send_air_data = async () => {

    //minus slitting
    await publish_result('sfs/air/1/slitting', getRandomAirQualityValue());
    //plus slitting
    await publish_result('sfs/air/2/slitting', getRandomAirQualityValue());

    //minus pressing
    await publish_result('sfs/air/1/pressing', getRandomAirQualityValue());
    //plus pressing
    await publish_result('sfs/air/2/pressing', getRandomAirQualityValue());

    //minus coatingroom
    await publish_result('sfs/air/1/coatingroom', getRandomAirQualityValue());
    //plus coatingroom
    await publish_result('sfs/air/2/coatingroom', getRandomAirQualityValue());

    //minus coatinghead
    await publish_result('sfs/air/1/coatinghead', getRandomAirQualityValue());
    //plus coatinghead
    await publish_result('sfs/air/2/coatinghead', getRandomAirQualityValue());


    //minus foil 창고 1F 
    await publish_result('sfs/air/1/foil_1f', getRandomAirQualityValue());
    //plus foil 창고 1F
    await publish_result('sfs/air/2/foil_1f', getRandomAirQualityValue());

    //minus 원자재 창고 2F 
    await publish_result('sfs/air/1/rawmaterial_2f', getRandomAirQualityValue());
    //plus 원자재 창고 2F
    await publish_result('sfs/air/2/rawmaterial_2f', getRandomAirQualityValue());


    //minus 파우더룸 창고 3F 
    //await publish_result('sfs/air/1/powderroom_3f', getRandomAirQualityValue());
    //plus 파우더룸  창고 3F
    //await publish_result('sfs/air/2/powderroom_3f', getRandomAirQualityValue());


}
 




const sleep = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

main(async () => 
{
    //1초에 한번씩 데이터를 생성한다.
    for (let i = 0; i < 60; i++) 
    {
        console.log(i + 1, "second");
        await send_data(1, "mixing");
        await send_data(2, "mixing");
        await send_air_data();
        await sleep(500);
    }
});
