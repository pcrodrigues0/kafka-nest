import {Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientKafka } from "@nestjs/microservices";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('any_name_i_want')
    private readonly client: ClientKafka
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('kafka-test')
  testKafka(){
    return this.client.emit('table.fleet.disconnections', {
      "accumList.deviceBattery":4.19,
      "accumList.deviceOdometer":51873.817,
      "accumList.driverToken":"136C42B",
      "accumList.flags.JAMMER_DETECTED":false,
      "accumList.flags.TOKEN_ACTIVATED":false,
      "accumList.flags.TOKEN_REGISTERED":true,
      "accumList.flags.VEHICLE_AT_KOVI":false,
      "accumList.flags.VEHICLE_LOCKED_BY_SERVER":false,
      "accumList.flags.VEHICLE_LOCKED_BY_TOKEN":false,
      "accumList.flags.VEHICLE_LOCKED_SAFE":false,
      "accumList.flags.VEHICLE_MOVING":false,
      "accumList.flags.VEHICLE_TOWED":false,
      "accumList.flags.VEHICLE_ZOMBIE":false,
      "accumList.vehicleBattery":12.95,
      "accumList.version":2,
      "accums":16,
      "altitude":78869,
      "append":0,
      "carrier":0,
      "carrierMs":255,
      "commState.available":true,
      "commState.connectedPPPSessionUp":true,
      "commState.dataService":true,
      "commState.networkService":true,
      "commState.networkTechnology":"GSM",
      "commState.roaming":false,
      "commState.voiceCallActive":false,
      "container_id":"e576188d91a240c6b5b71971a9d9d444-1607176380",
      "container_name":"iot-iot-udp-srv",
      "createdAt":"2021-03-23T12:14:22.539Z",
      "deviceId":"4675026407",
      "deviceImei":"865284048168748",
      "deviceOdometer":51870.994,
      "ecs_cluster":"iot-production",
      "ecs_task_arn":"arn:aws:ecs:us-east-1:766251973294:task/iot-production/e576188d91a240c6b5b71971a9d9d444",
      "ecs_task_definition":"iot-production:281",
      "entity.guid":"Mjg2NjczMHxBUE18QVBQTElDQVRJT058OTQ4OTY0MTQ5",
      "entity.guids":"Mjg2NjczMHxBUE18QVBQTElDQVRJT058OTQ4OTY0MTQ5",
      "entity.name":"Kovi Tracking System - Production",
      "entity.type":"SERVICE",
      "event":"DEVICE_SLEEP_REPORT",
      "eventCode":33,
      "eventIndex":127,
      "fixStatus":32,
      "hasCommand":false,
      "hdop":7,
      "heading":0,
      "hostname":"ip-10-0-3-213.ec2.internal",
      "inputs.ignition":false,
      "isDecoded":true,
      "latitude":-23.65824232181889,
      "level":30,
      "longitude":-46.71490032956639,
      "message":"Sending to Kinesis",
      "messageType":"2",
      "mobileId":"4675026407",
      "mobileIdLength":5,
      "mobileIdType":"1",
      "mobileIdTypeLength":"1",
      "newrelic.logPattern":"Sending to <*>",
      "newrelic.source":"api.logs",
      "odometer":51873.817,
      "options":"83",
      "pid":27,
      "plugin.source":"BARE-METAL",
      "plugin.type":"fluent-bit",
      "plugin.version":"1.14.0",
      "receivedAt":"2022-11-17T00:28:51.307Z",
      "rssi":-59,
      "satellites":18,
      "sequenceNumber":"952b",
      "serviceType":"1",
      "simCardIccd":"89550534180031066320",
      "source":"stdout",
      "span.id":"f63a2916172de6b4",
      "spare":0,
      "speed":0,
      "timestamp":1668644931360,
      "timeToFix":1668644928000,
      "trace.id":"13a7cf2823a5d00d5c6a100bd29d31ef",
      "unitStatus":0,
      "updatedAt":"2022-11-16T22:47:16.807Z",
      "updateTime":1668644928000,
      "vehicleOdometer":11,
      "vin":"9BWDB45U3LT088713"
    })
  }
}
