var renderClass="\x6A\x70\x2E\x6E\x67\x74\x2E\x72\x74\x6D\x2E\x72\x65\x6E\x64\x65\x72\x2E\x56\x65\x68\x69\x63\x6C\x65\x50\x61\x72\x74\x73\x52\x65\x6E\x64\x65\x72\x65\x72";importPackage(Packages["\x6F\x72\x67"]["\x6C\x77\x6A\x67\x6C"]["\x6F\x70\x65\x6E\x67\x6C"]);importPackage(Packages["\x6A\x70"]["\x6E\x67\x74"]["\x72\x74\x6D"]["\x72\x65\x6E\x64\x65\x72"]);importPackage(Packages["\x6A\x70"]["\x6E\x67\x74"]["\x72\x74\x6D"]["\x75\x74\x69\x6C"]);importPackage(Packages["\x6A\x70"]["\x6E\x67\x74"]["\x6E\x67\x74\x6C\x69\x62"]["\x75\x74\x69\x6C"]);importPackage(Packages["\x6A\x70"]["\x6E\x67\x74"]["\x6E\x67\x74\x6C\x69\x62"]["\x72\x65\x6E\x64\x65\x72\x65\x72"]);importPackage(Packages["\x6A\x70"]["\x6E\x67\x74"]["\x6E\x67\x74\x6C\x69\x62"]["\x69\x6F"]);importPackage(Packages["\x6A\x70"]["\x6E\x67\x74"]["\x6E\x67\x74\x6C\x69\x62"]["\x6D\x61\x74\x68"]);importPackage(Packages["\x6F\x72\x67"]["\x6C\x77\x6A\x67\x6C"]["\x69\x6E\x70\x75\x74"]);importPackage(Packages["\x6A\x70"]["\x6B\x61\x69\x7A"]["\x61\x74\x73\x61\x73\x73\x69\x73\x74\x6D\x6F\x64"]["\x61\x70\x69"]);var doorOpnSec=2.3;var doorOpnSpd=[[0.04,0.0],[0.18,0.05],[1.68,0.52],[0.12,0.02],[0.22,0.06],[0.06,0.0]];var doorClsSec=3.1;var doorClsSpd=[[0.045,0.0],[0.15,-0.05],[2.165,-0.55],[0.31,-0.01],[0.34,-0.04],[0.09,0.0]];var entityID=0;var prevTickID=0;var doorMovementID=1;var doorStateID=2;var doorMovingTickID=3;var doorTargetMovementID=4;var countupID=5;var doorMovement;var doorState;var doorStateInTrain;var shouldUpdate;function init(_0x287dx11,_0x287dx12){body1= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\u524D\u9762","\u524D\u9762\x32","\u524D\u9762\x33","\x34\x51","\u5E55\u5F71","\u524D\u9762\u30B9\u30C6\u30C3\u30D7","\u5C3E\u706F\u67A0","\u624B\u3059\u308A","\u524D\u7167\u706F","\u98FE\u308A\u5E2F","\u524D\u9762\u7A93\u67F1","\u524D\u9762\u7A93\x48\u30B4\u30E0"));body2= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\u5074\u9762","\u8ECA\u5074\u706F","\u4E57\u52D9\u54E1\u6249\u5916","\u96E8\u6A0B","\u6238\u888B\u7A93\u90E8\u30B7\u30E3\u30C9\u30A6\u51E6\u7406","\u5074\u9762\x48\u30B4\u30E0","\u9593\u5916","\u7A93\u67A0\u5916","\u5074\u9762\u7A93\u5916","\u30C9\u30A2\u4E0B","\u5C4B\u6839","\u51B7\u623F","\u30A2\u30F3\u30C6\u30CA","\u30D1\u30F3\u30BF\u57FA\u53F0","\u59BB\u9762\u5916","\u8CAB\u901A\u6249\u5916","\u8CAB\u901A\u5E4C"));cab_body= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\u4E57\u52D9\u54E1\u5BA4\u4ED5\u5207\u308A\x5F\u4E57\u52D9\u54E1\u5BA4","\u524D\u9762\u5185\u5074","\x48\u30B4\u30E0\u4E57\u52D9\u54E1\u5BA4\u5074","\u4E57\u52D9\u54E1\u5BA4\u5E8A","\u4E57\u52D9\u54E1\u5BA4\u5185\u5074","\u4E57\u52D9\u54E1\u6249\u5185","\u4E57\u52D9\u54E1\u5BA4\u5929\u4E95","\u4E57\u52D9\u54E1\u5BA4\u6A5F\u5668\u985E\x5F\u30DF\u30E9\u30FC","\u4E57\u52D9\u54E1\u5BA4\u6A5F\u5668\u985E","\u904B\u8EE2\u53F0\u7B50\u4F53","\u30E1\u30FC\u30BF\u30FC"));bodyGlass= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\u6238\u888B\u7A93","\u5074\u9762\u7A93","\u8CAB\u901A\u7A93"));cabGlass= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\u524D\u9762\u7A93"));doorLampL_ON= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\x4C\x5F\x4F\x6E"));doorLampL_OFF= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\x4C\x5F\x4F\x66\x66"));doorLampR_ON= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\x52\x5F\x4F\x6E"));doorLampR_OFF= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\x52\x5F\x4F\x66\x66"));pantaUp= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\u30D1\u30F3\u30BF\u4E0A\u6607"));pantaDawn= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\u30D1\u30F3\u30BF\u4E0B\u964D"));cabDoorLampON= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\u6238\u9589\u70B9"));cabDoorLampOFF= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\u6238\u9589\u6EC5"));mcH= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\u30DE\u30B9\u30B3\u30F3"));brH= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\u30D6\u30EC\u30FC\u30AD\u30CF\u30F3\u30C9\u30EB"));revH= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\u30EC\u30D0\u30FC\u30B5\u30FC"));hornPedalON= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\u8B66\u7B1B\u30DA\u30C0\u30EB\x5F\x4F\x6E"));hornPedalOFF= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\u8B66\u7B1B\u30DA\u30C0\u30EB\x5F\x4F\x66\x66"));atsPanel= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\x41\x54\x53\u8868\u793A\u5668","\u4E0A","\u4E0B"));ats_12x= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\x31\x32"));ats_11x= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\x31\x31"));ats_10x= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\x31\x30"));ats_9x= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\x39"));ats_8x= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\x38"));ats_7x= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\x37"));ats_6x= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\x36"));ats_5x= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\x35"));ats_4x= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\x34"));ats_3x= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\x33"));ats_2x= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\x32"));ats_1x= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\x31"));ats_x0= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\x5F\x30"));ats_x5= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\x5F\x35"));atsON= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\u52D5\u4F5C\x5F\u70B9"));atsOFF= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\u52D5\u4F5C\x5F\u6EC5"));interior= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\u9593","\u7A93\u67A0\u5185","\u5074\u9762\u7A93\u5185","\u5185\u5074","\u67A0\u985E","\u5EA7\u5E2D","\u30DD\u30FC\u30EB","\u30C0\u30AF\u30C8","\u4ED5\u5207\u308A\u5BA2\u5BA4\u5074","\u59BB\u9762\u5185","\u7981\u7159","\u8CAB\u901A\u6249\u5185","\u53D6\u3063\u624B","\u5929\u4E95","\u5E8A","\u4E57\u52D9\u54E1\u5BA4\u4ED5\u5207\u308A\x5F\u5BA2\u5BA4","\u86CD\u5149\u706F","\u540A\u308A\u9769","\u30B9\u30D4\u30FC\u30AB\u30FC"));body3= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\u5E8A\u4E0B","\u5E95","\u5F71","\u914D\u7BA1","\u68AF\u5B50","\u9023\u7D50\u5668","\u30B8\u30E3\u30F3\u30D1\u7DDA","\x41\x54\x53\u8ECA\u4E0A\u5B50"));headlighton= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\u524D\u7167\u706F\u70B9"));headlightoff= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\u524D\u7167\u706F\u6EC5"));taillighton= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\u5C3E\u706F\u70B9"));taillightoff= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\u5C3E\u706F\u6EC5"));doorLFo= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\x64\x6F\x6F\x72\x5F\x4C\x46"));doorLBo= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\x64\x6F\x6F\x72\x5F\x4C\x42"));doorRFo= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\x64\x6F\x6F\x72\x5F\x52\x46"));doorRBo= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\x64\x6F\x6F\x72\x5F\x52\x42"));doorLFi= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\x64\x6F\x6F\x72\x5F\x4C\x46\x4E"));doorLBi= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\x64\x6F\x6F\x72\x5F\x4C\x42\x4E"));doorRFi= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\x64\x6F\x6F\x72\x5F\x52\x46\x4E"));doorRBi= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\x64\x6F\x6F\x72\x5F\x52\x42\x4E"));bogieF= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\x62\x6F\x67\x69\x65\x46"));bogieB= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\x62\x6F\x67\x69\x65\x42"));wheelF1= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\x77\x68\x65\x65\x6C\x46\x31"));wheelF2= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\x77\x68\x65\x65\x6C\x46\x32"));wheelB1= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\x77\x68\x65\x65\x6C\x42\x31"));wheelB2= renderer["\x72\x65\x67\x69\x73\x74\x65\x72\x50\x61\x72\x74\x73"]( new Parts("\x77\x68\x65\x65\x6C\x42\x32"))}function renderPreview(_0x287dx14){if(_0x287dx14== 0){body1["\x72\x65\x6E\x64\x65\x72"](renderer);body2["\x72\x65\x6E\x64\x65\x72"](renderer);cab_body["\x72\x65\x6E\x64\x65\x72"](renderer);doorLampL_OFF["\x72\x65\x6E\x64\x65\x72"](renderer);doorLampR_OFF["\x72\x65\x6E\x64\x65\x72"](renderer);pantaUp["\x72\x65\x6E\x64\x65\x72"](renderer);atsPanel["\x72\x65\x6E\x64\x65\x72"](renderer);interior["\x72\x65\x6E\x64\x65\x72"](renderer);body3["\x72\x65\x6E\x64\x65\x72"](renderer);headlightoff["\x72\x65\x6E\x64\x65\x72"](renderer);taillightoff["\x72\x65\x6E\x64\x65\x72"](renderer);doorLFo["\x72\x65\x6E\x64\x65\x72"](renderer);doorLBo["\x72\x65\x6E\x64\x65\x72"](renderer);doorRFo["\x72\x65\x6E\x64\x65\x72"](renderer);doorRBo["\x72\x65\x6E\x64\x65\x72"](renderer);doorLFi["\x72\x65\x6E\x64\x65\x72"](renderer);doorLBi["\x72\x65\x6E\x64\x65\x72"](renderer);doorRFi["\x72\x65\x6E\x64\x65\x72"](renderer);doorRBi["\x72\x65\x6E\x64\x65\x72"](renderer);bogieF["\x72\x65\x6E\x64\x65\x72"](renderer);bogieB["\x72\x65\x6E\x64\x65\x72"](renderer);wheelF1["\x72\x65\x6E\x64\x65\x72"](renderer);wheelF2["\x72\x65\x6E\x64\x65\x72"](renderer);wheelB1["\x72\x65\x6E\x64\x65\x72"](renderer);wheelB2["\x72\x65\x6E\x64\x65\x72"](renderer)}}function updateTick(_0x287dx16){if(_0x287dx16== null){return false};var _0x287dx17=_0x287dx16["\x67\x65\x74\x52\x65\x73\x6F\x75\x72\x63\x65\x53\x74\x61\x74\x65"]()["\x67\x65\x74\x44\x61\x74\x61\x4D\x61\x70"]();var _0x287dx18=renderer["\x67\x65\x74\x54\x69\x63\x6B"](_0x287dx16);var _0x287dx19=_0x287dx17["\x67\x65\x74\x49\x6E\x74"]("\x70\x72\x65\x76\x54\x69\x63\x6B");_0x287dx17["\x73\x65\x74\x49\x6E\x74"]("\x70\x72\x65\x76\x54\x69\x63\x6B",_0x287dx18,false);if(_0x287dx18!= _0x287dx19){return true};return false}function xorshift(_0x287dx1b){var _0x287dx1c=5;if(_0x287dx1b=== 0){_0x287dx1b= 76314};_0x287dx1b= _0x287dx1b^ _0x287dx1b<< 13;_0x287dx1b= _0x287dx1b^ _0x287dx1b>> 17;_0x287dx1b= _0x287dx1b^ _0x287dx1b<< 15;if(String(_0x287dx1b)["\x6C\x65\x6E\x67\x74\x68"]< _0x287dx1c){_0x287dx1b= xorshift(_0x287dx1b+ 1)};return _0x287dx1b}function getArrayFromData(_0x287dx1e,_0x287dx1f){var _0x287dx20=renderer["\x67\x65\x74\x44\x61\x74\x61"](_0x287dx1e);if(_0x287dx20== 0){_0x287dx20= [];for(var _0x287dx21=0;_0x287dx21< _0x287dx1f;_0x287dx21++){_0x287dx20[_0x287dx20["\x6C\x65\x6E\x67\x74\x68"]]= 0}};return _0x287dx20}var HashMap=Java["\x74\x79\x70\x65"]("\x6A\x61\x76\x61\x2E\x75\x74\x69\x6C\x2E\x48\x61\x73\x68\x4D\x61\x70");var isBreaking= new HashMap();function renderATS(_0x287dx16){atsPanel["\x72\x65\x6E\x64\x65\x72"](renderer);var _0x287dx17=_0x287dx16["\x67\x65\x74\x52\x65\x73\x6F\x75\x72\x63\x65\x53\x74\x61\x74\x65"]()["\x67\x65\x74\x44\x61\x74\x61\x4D\x61\x70"]();var _0x287dx25=_0x287dx16["\x67\x65\x74\x53\x69\x67\x6E\x61\x6C"]();var _0x287dx26=_0x287dx16["\x69\x73\x43\x6F\x6E\x74\x72\x6F\x6C\x43\x61\x72"]();var _0x287dx27=_0x287dx16["\x67\x65\x74\x53\x70\x65\x65\x64"]()* 72.0;if(!_0x287dx26){return};function _0x287dx28(_0x287dx29){if(_0x287dx27> (_0x287dx29+ 15)){_0x287dx17["\x73\x65\x74\x42\x6F\x6F\x6C\x65\x61\x6E"]('\x69\x73\x4F\x76\x65\x72\x35',false,1);_0x287dx17["\x73\x65\x74\x42\x6F\x6F\x6C\x65\x61\x6E"]('\x69\x73\x4F\x76\x65\x72\x31\x30',true,1);ControlTrain["\x73\x65\x74\x4E\x6F\x74\x63\x68"](-8);isBreaking["\x70\x75\x74"](_0x287dx16,true)}else {if(_0x287dx27> (_0x287dx29+ 10)){_0x287dx17["\x73\x65\x74\x42\x6F\x6F\x6C\x65\x61\x6E"]('\x69\x73\x4F\x76\x65\x72\x35',false,1);_0x287dx17["\x73\x65\x74\x42\x6F\x6F\x6C\x65\x61\x6E"]('\x69\x73\x4F\x76\x65\x72\x31\x30',true,1);ControlTrain["\x73\x65\x74\x4E\x6F\x74\x63\x68"](-7);isBreaking["\x70\x75\x74"](_0x287dx16,true)}else {if(_0x287dx27> (_0x287dx29+ 5)){_0x287dx17["\x73\x65\x74\x42\x6F\x6F\x6C\x65\x61\x6E"]('\x69\x73\x4F\x76\x65\x72\x35',false,1);_0x287dx17["\x73\x65\x74\x42\x6F\x6F\x6C\x65\x61\x6E"]('\x69\x73\x4F\x76\x65\x72\x31\x30',true,1);ControlTrain["\x73\x65\x74\x4E\x6F\x74\x63\x68"](-4);isBreaking["\x70\x75\x74"](_0x287dx16,true)}else {if(_0x287dx27> (_0x287dx29+ 1)){_0x287dx17["\x73\x65\x74\x42\x6F\x6F\x6C\x65\x61\x6E"]('\x69\x73\x4F\x76\x65\x72\x35',true,1);_0x287dx17["\x73\x65\x74\x42\x6F\x6F\x6C\x65\x61\x6E"]('\x69\x73\x4F\x76\x65\x72\x31\x30',false,1);if(isBreaking["\x67\x65\x74"](_0x287dx16)){ControlTrain["\x73\x65\x74\x4E\x6F\x74\x63\x68"](0);isBreaking["\x70\x75\x74"](_0x287dx16,false)}}else {_0x287dx17["\x73\x65\x74\x42\x6F\x6F\x6C\x65\x61\x6E"]('\x69\x73\x4F\x76\x65\x72\x35',false,1);_0x287dx17["\x73\x65\x74\x42\x6F\x6F\x6C\x65\x61\x6E"]('\x69\x73\x4F\x76\x65\x72\x31\x30',false,1);if(isBreaking["\x67\x65\x74"](_0x287dx16)){ControlTrain["\x73\x65\x74\x4E\x6F\x74\x63\x68"](0);isBreaking["\x70\x75\x74"](_0x287dx16,false)}}}}}}if(_0x287dx25!= 20){if(_0x287dx17["\x67\x65\x74\x42\x6F\x6F\x6C\x65\x61\x6E"]('\x69\x73\x4F\x76\x65\x72\x31\x30')){atsON["\x72\x65\x6E\x64\x65\x72"](renderer)}else {if(_0x287dx17["\x67\x65\x74\x42\x6F\x6F\x6C\x65\x61\x6E"]('\x69\x73\x4F\x76\x65\x72\x35')){var _0x287dx18=renderer["\x67\x65\x74\x54\x69\x63\x6B"](_0x287dx16);var _0x287dx2a=_0x287dx18% 20;if(_0x287dx2a<= 10){atsON["\x72\x65\x6E\x64\x65\x72"](renderer)}else {atsOFF["\x72\x65\x6E\x64\x65\x72"](renderer)}}else {atsOFF["\x72\x65\x6E\x64\x65\x72"](renderer)}}};switch(_0x287dx25){case 10:_0x287dx28(810);break;case 11:_0x287dx28(15);ats_1x["\x72\x65\x6E\x64\x65\x72"](renderer);ats_x5["\x72\x65\x6E\x64\x65\x72"](renderer);break;case 12:_0x287dx28(25);ats_2x["\x72\x65\x6E\x64\x65\x72"](renderer);ats_x5["\x72\x65\x6E\x64\x65\x72"](renderer);break;case 13:_0x287dx28(30);ats_3x["\x72\x65\x6E\x64\x65\x72"](renderer);ats_x0["\x72\x65\x6E\x64\x65\x72"](renderer);break;case 14:_0x287dx28(45);ats_4x["\x72\x65\x6E\x64\x65\x72"](renderer);ats_x5["\x72\x65\x6E\x64\x65\x72"](renderer);break;case 15:_0x287dx28(65);ats_6x["\x72\x65\x6E\x64\x65\x72"](renderer);ats_x5["\x72\x65\x6E\x64\x65\x72"](renderer);break;case 16:_0x287dx28(90);ats_9x["\x72\x65\x6E\x64\x65\x72"](renderer);ats_x0["\x72\x65\x6E\x64\x65\x72"](renderer);break;case 17:_0x287dx28(100);ats_10x["\x72\x65\x6E\x64\x65\x72"](renderer);ats_x0["\x72\x65\x6E\x64\x65\x72"](renderer);break;case 18:_0x287dx28(110);ats_11x["\x72\x65\x6E\x64\x65\x72"](renderer);ats_x0["\x72\x65\x6E\x64\x65\x72"](renderer);break;case 19:_0x287dx28(120);ats_12x["\x72\x65\x6E\x64\x65\x72"](renderer);ats_x0["\x72\x65\x6E\x64\x65\x72"](renderer);break;case 20:_0x287dx28(65);break;case 21:_0x287dx28(45);ats_4x["\x72\x65\x6E\x64\x65\x72"](renderer);ats_x5["\x72\x65\x6E\x64\x65\x72"](renderer);break;case 22:_0x287dx28(0);ats_x0["\x72\x65\x6E\x64\x65\x72"](renderer);break;default:break}}function atsConfirmation(_0x287dx16){var _0x287dx17=_0x287dx16["\x67\x65\x74\x52\x65\x73\x6F\x75\x72\x63\x65\x53\x74\x61\x74\x65"]()["\x67\x65\x74\x44\x61\x74\x61\x4D\x61\x70"]();var _0x287dx2c=_0x287dx16["\x67\x65\x74\x4E\x6F\x74\x63\x68"]();if(_0x287dx2c< 0){_0x287dx17["\x73\x65\x74\x42\x6F\x6F\x6C\x65\x61\x6E"]('\x69\x73\x41\x54\x53\x52\x75\x6E',true,1)}else {_0x287dx17["\x73\x65\x74\x42\x6F\x6F\x6C\x65\x61\x6E"]('\x69\x73\x41\x54\x53\x52\x75\x6E',false,1)}}function atsTimer(_0x287dx16){var _0x287dx17=_0x287dx16["\x67\x65\x74\x52\x65\x73\x6F\x75\x72\x63\x65\x53\x74\x61\x74\x65"]()["\x67\x65\x74\x44\x61\x74\x61\x4D\x61\x70"]();var _0x287dx2e=5;var _0x287dx2f=_0x287dx17["\x67\x65\x74\x49\x6E\x74"]('\x74\x69\x6D\x65\x72\x43\x6F\x75\x6E\x74');if(_0x287dx16["\x67\x65\x74\x53\x70\x65\x65\x64"]()== 0){_0x287dx17["\x73\x65\x74\x42\x6F\x6F\x6C\x65\x61\x6E"]('\x61\x74\x73\x57\x61\x72\x6E\x4F\x6E\x30',false,1);_0x287dx17["\x73\x65\x74\x42\x6F\x6F\x6C\x65\x61\x6E"]('\x61\x74\x73\x57\x61\x72\x6E\x4F\x6E\x31',false,1);_0x287dx2f=  -3}else {if(_0x287dx2f==  -2){_0x287dx17["\x73\x65\x74\x42\x6F\x6F\x6C\x65\x61\x6E"]('\x61\x74\x73\x57\x61\x72\x6E\x4F\x6E\x30',false,1);return}else {if(_0x287dx17["\x67\x65\x74\x42\x6F\x6F\x6C\x65\x61\x6E"]('\x61\x74\x73\x57\x61\x72\x6E\x45\x6D\x72')|| _0x287dx2f==  -3){return}else {if(_0x287dx2f==  -1){_0x287dx17["\x73\x65\x74\x42\x6F\x6F\x6C\x65\x61\x6E"]('\x61\x74\x73\x57\x61\x72\x6E\x4F\x6E\x30',true,1);_0x287dx17["\x73\x65\x74\x42\x6F\x6F\x6C\x65\x61\x6E"]('\x61\x74\x73\x57\x61\x72\x6E\x4F\x6E\x31',true,1);_0x287dx2f= _0x287dx2e* 20}else {if(_0x287dx16["\x67\x65\x74\x4E\x6F\x74\x63\x68"]()< 0){_0x287dx2f=  -2}else {if(_0x287dx2f== 0){_0x287dx17["\x73\x65\x74\x42\x6F\x6F\x6C\x65\x61\x6E"]('\x61\x74\x73\x57\x61\x72\x6E\x45\x6D\x72',true,1);_0x287dx2f=  -3}else {_0x287dx2f--}}}}}};_0x287dx17["\x73\x65\x74\x49\x6E\x74"]("\x74\x69\x6D\x65\x72\x43\x6F\x75\x6E\x74",_0x287dx2f,1)}function longATSAlert(_0x287dx16,_0x287dx14){if(!_0x287dx16["\x69\x73\x43\x6F\x6E\x74\x72\x6F\x6C\x43\x61\x72"]()){return};var _0x287dx31=_0x287dx16["\x67\x65\x74\x53\x69\x67\x6E\x61\x6C"]();var _0x287dx32=_0x287dx16["\x67\x65\x74\x53\x70\x65\x65\x64"]()* 72;var _0x287dx17=_0x287dx16["\x67\x65\x74\x52\x65\x73\x6F\x75\x72\x63\x65\x53\x74\x61\x74\x65"]()["\x67\x65\x74\x44\x61\x74\x61\x4D\x61\x70"]();var _0x287dx33=_0x287dx17["\x67\x65\x74\x42\x6F\x6F\x6C\x65\x61\x6E"]('\x69\x73\x41\x54\x53\x52\x75\x6E');var _0x287dx34=_0x287dx17["\x67\x65\x74\x42\x6F\x6F\x6C\x65\x61\x6E"]('\x61\x74\x73\x57\x61\x72\x6E\x45\x6D\x72');var _0x287dx35=_0x287dx17["\x67\x65\x74\x42\x6F\x6F\x6C\x65\x61\x6E"]('\x61\x74\x73\x57\x61\x72\x6E\x4F\x6E\x30');var _0x287dx36=_0x287dx17["\x67\x65\x74\x42\x6F\x6F\x6C\x65\x61\x6E"]('\x61\x74\x73\x57\x61\x72\x6E\x4F\x6E\x31');if(_0x287dx34){if(_0x287dx32> 0){ControlTrain["\x73\x65\x74\x4E\x6F\x74\x63\x68"](-8)}else {_0x287dx17["\x73\x65\x74\x42\x6F\x6F\x6C\x65\x61\x6E"]('\x61\x74\x73\x57\x61\x72\x6E\x45\x6D\x72',false,1);ControlTrain["\x73\x65\x74\x4E\x6F\x74\x63\x68"](0)}};if(_0x287dx31== 20){_0x287dx17["\x73\x65\x74\x42\x6F\x6F\x6C\x65\x61\x6E"]('\x61\x74\x73\x52\x75\x6E\x6E\x69\x6E\x67',true,1);atsConfirmation(_0x287dx16);atsTimer(_0x287dx16);if(_0x287dx33){return}}else {_0x287dx17["\x73\x65\x74\x49\x6E\x74"]("\x74\x69\x6D\x65\x72\x43\x6F\x75\x6E\x74",-1,1);_0x287dx17["\x73\x65\x74\x42\x6F\x6F\x6C\x65\x61\x6E"]('\x61\x74\x73\x52\x75\x6E\x6E\x69\x6E\x67',false,1);_0x287dx17["\x73\x65\x74\x42\x6F\x6F\x6C\x65\x61\x6E"]('\x61\x74\x73\x57\x61\x72\x6E\x4F\x6E\x30',false,1);_0x287dx17["\x73\x65\x74\x42\x6F\x6F\x6C\x65\x61\x6E"]('\x61\x74\x73\x57\x61\x72\x6E\x4F\x6E\x31',false,1);_0x287dx17["\x73\x65\x74\x42\x6F\x6F\x6C\x65\x61\x6E"]('\x61\x74\x73\x57\x61\x72\x6E\x45\x6D\x72',false,1)};var _0x287dx19=renderer["\x67\x65\x74\x44\x61\x74\x61"](entityID<< prevTickID);var _0x287dx37=renderer["\x67\x65\x74\x54\x69\x63\x6B"](_0x287dx16);shouldUpdate= ((_0x287dx19!= _0x287dx37)&& (_0x287dx14== 0));if(shouldUpdate){renderer["\x73\x65\x74\x44\x61\x74\x61"](entityID<< prevTickID,_0x287dx37)};if(_0x287dx31== 20&& _0x287dx35){var _0x287dx18=renderer["\x67\x65\x74\x54\x69\x63\x6B"](_0x287dx16);var _0x287dx2a=_0x287dx18% 20;if(_0x287dx2a<= 10){atsON["\x72\x65\x6E\x64\x65\x72"](renderer)}else {atsOFF["\x72\x65\x6E\x64\x65\x72"](renderer)}}else {if(_0x287dx35){atsON["\x72\x65\x6E\x64\x65\x72"](renderer)}else {if(_0x287dx36){atsOFF["\x72\x65\x6E\x64\x65\x72"](renderer)}else {if(_0x287dx31== 20){atsOFF["\x72\x65\x6E\x64\x65\x72"](renderer)}}}}}function kitadenATS(_0x287dx16){if(_0x287dx16== null){return};var _0x287dx26=_0x287dx16["\x69\x73\x43\x6F\x6E\x74\x72\x6F\x6C\x43\x61\x72"]();var _0x287dx25=_0x287dx16["\x67\x65\x74\x53\x69\x67\x6E\x61\x6C"]();var _0x287dx27=_0x287dx16["\x67\x65\x74\x53\x70\x65\x65\x64"]()* 72;if(!_0x287dx26){return};function _0x287dx28(_0x287dx29){if(_0x287dx27> (_0x287dx29+ 5)){ControlTrain["\x73\x65\x74\x4E\x6F\x74\x63\x68"](-8);isBreaking["\x70\x75\x74"](_0x287dx16,true)}else {if(isBreaking["\x67\x65\x74"](_0x287dx16)){if(_0x287dx27<= 0){ControlTrain["\x73\x65\x74\x4E\x6F\x74\x63\x68"](0);isBreaking["\x70\x75\x74"](_0x287dx16,false)}}}}switch(_0x287dx25){case 1:_0x287dx28(15);break;case 2:_0x287dx28(45);break;case 3:_0x287dx28(45);break;case 4:_0x287dx28(65);break;case 5:_0x287dx28(100);break;default:break}}function sendHornKey(_0x287dx16){var _0x287dx17=_0x287dx16["\x67\x65\x74\x52\x65\x73\x6F\x75\x72\x63\x65\x53\x74\x61\x74\x65"]()["\x67\x65\x74\x44\x61\x74\x61\x4D\x61\x70"]();riddenByEntity= _0x287dx16["\x66\x69\x65\x6C\x64\x5F\x37\x30\x31\x35\x33\x5F\x6E"];if(riddenByEntity=== NGTUtil["\x67\x65\x74\x43\x6C\x69\x65\x6E\x74\x50\x6C\x61\x79\x65\x72"]()){_0x287dx17["\x73\x65\x74\x42\x6F\x6F\x6C\x65\x61\x6E"]('\x69\x73\x50\x75\x73\x68\x48\x6F\x72\x6E',Keyboard["\x69\x73\x4B\x65\x79\x44\x6F\x77\x6E"](Keyboard.KEY_P),1)}else {if(riddenByEntity== null){_0x287dx17["\x73\x65\x74\x42\x6F\x6F\x6C\x65\x61\x6E"]('\x69\x73\x50\x75\x73\x68\x48\x6F\x72\x6E',false,1)}}}function updateDoors(_0x287dx16){if(entityID==  -1){return};var _0x287dx3b=getArrayFromData(entityID<< doorMovingTickID,2);var _0x287dx3c=false;for(var _0x287dx21=0;_0x287dx21<= 1;_0x287dx21++){var _0x287dx3d=doorStateInTrain== 3?true:(_0x287dx21== 0?doorStateInTrain== 2:doorStateInTrain== 1);var _0x287dx3e=doorStateInTrain== 0?true:(_0x287dx21== 0?doorStateInTrain== 1:doorStateInTrain== 2);if(_0x287dx3d&& doorState[_0x287dx21]== 0){doorState[_0x287dx21]= 1};if(_0x287dx3e&& doorState[_0x287dx21]== 2){doorState[_0x287dx21]= 3};var _0x287dx3f=doorState[_0x287dx21]== 1?doorOpnSpd:(doorState[_0x287dx21]== 3?doorClsSpd:-1);if(_0x287dx3f!=  -1){var _0x287dx40=0;for(var _0x287dx41=0;_0x287dx41< _0x287dx3f["\x6C\x65\x6E\x67\x74\x68"];_0x287dx41++){if(_0x287dx3b[_0x287dx21]== 0){var _0x287dx42=getArrayFromData(entityID<< doorTargetMovementID,2);var _0x287dx43=0;for(var _0x287dx44=0;_0x287dx44< _0x287dx3f["\x6C\x65\x6E\x67\x74\x68"];_0x287dx44++){_0x287dx43+= _0x287dx3f[_0x287dx44][1]};_0x287dx42[_0x287dx21]= doorMovement[_0x287dx21]+ _0x287dx43;renderer["\x73\x65\x74\x44\x61\x74\x61"](entityID<< doorTargetMovementID,_0x287dx42)};var _0x287dx45=_0x287dx3f[_0x287dx41][0];var _0x287dx46=_0x287dx3f[_0x287dx41][1];if(_0x287dx3b[_0x287dx21]<= (_0x287dx40+ (_0x287dx45* 20))){if(!shouldUpdate){break};doorMovement[_0x287dx21]+= _0x287dx46/ _0x287dx45/ 20.0;var _0x287dx47=doorState[_0x287dx21]== 1?doorOpnSec:doorClsSec;if(_0x287dx3b[_0x287dx21]== (_0x287dx47* 20)- 1){doorState[_0x287dx21]= (doorState[_0x287dx21]+ 1)% 4;_0x287dx3b[_0x287dx21]= 0;var _0x287dx42=renderer["\x67\x65\x74\x44\x61\x74\x61"](entityID<< doorTargetMovementID);doorMovement[_0x287dx21]= _0x287dx42[_0x287dx21]}else {_0x287dx3b[_0x287dx21]++};_0x287dx3c= true;break}else {_0x287dx40+= (_0x287dx45* 20)}}}};if(_0x287dx3c){renderer["\x73\x65\x74\x44\x61\x74\x61"](entityID<< doorMovementID,doorMovement);renderer["\x73\x65\x74\x44\x61\x74\x61"](entityID<< doorMovingTickID,_0x287dx3b);renderer["\x73\x65\x74\x44\x61\x74\x61"](entityID<< doorStateID,doorState)}}function renderDoor_i(_0x287dx16){GL11["\x67\x6C\x50\x75\x73\x68\x4D\x61\x74\x72\x69\x78"]();GL11["\x67\x6C\x54\x72\x61\x6E\x73\x6C\x61\x74\x65\x66"](0,0,doorMovement[0]);doorLFi["\x72\x65\x6E\x64\x65\x72"](renderer);GL11["\x67\x6C\x54\x72\x61\x6E\x73\x6C\x61\x74\x65\x66"](0,0,-(doorMovement[0]* 2));doorLBi["\x72\x65\x6E\x64\x65\x72"](renderer);GL11["\x67\x6C\x50\x6F\x70\x4D\x61\x74\x72\x69\x78"]();GL11["\x67\x6C\x50\x75\x73\x68\x4D\x61\x74\x72\x69\x78"]();GL11["\x67\x6C\x54\x72\x61\x6E\x73\x6C\x61\x74\x65\x66"](0,0,doorMovement[1]);doorRFi["\x72\x65\x6E\x64\x65\x72"](renderer);GL11["\x67\x6C\x54\x72\x61\x6E\x73\x6C\x61\x74\x65\x66"](0,0,-(doorMovement[1]* 2));doorRBi["\x72\x65\x6E\x64\x65\x72"](renderer);GL11["\x67\x6C\x50\x6F\x70\x4D\x61\x74\x72\x69\x78"]()}function renderDoor_o(_0x287dx16){GL11["\x67\x6C\x50\x75\x73\x68\x4D\x61\x74\x72\x69\x78"]();GL11["\x67\x6C\x54\x72\x61\x6E\x73\x6C\x61\x74\x65\x66"](0,0,doorMovement[0]);doorLFo["\x72\x65\x6E\x64\x65\x72"](renderer);GL11["\x67\x6C\x54\x72\x61\x6E\x73\x6C\x61\x74\x65\x66"](0,0,-(doorMovement[0]* 2));doorLBo["\x72\x65\x6E\x64\x65\x72"](renderer);GL11["\x67\x6C\x50\x6F\x70\x4D\x61\x74\x72\x69\x78"]();GL11["\x67\x6C\x50\x75\x73\x68\x4D\x61\x74\x72\x69\x78"]();GL11["\x67\x6C\x54\x72\x61\x6E\x73\x6C\x61\x74\x65\x66"](0,0,doorMovement[1]);doorRFo["\x72\x65\x6E\x64\x65\x72"](renderer);GL11["\x67\x6C\x54\x72\x61\x6E\x73\x6C\x61\x74\x65\x66"](0,0,-(doorMovement[1]* 2));doorRBo["\x72\x65\x6E\x64\x65\x72"](renderer);GL11["\x67\x6C\x50\x6F\x70\x4D\x61\x74\x72\x69\x78"]()}function renderDoorLamp(_0x287dx16){if(_0x287dx16== null){return};var _0x287dx4b=String(Math["\x61\x62\x73"](xorshift(_0x287dx16["\x66\x75\x6E\x63\x5F\x31\x34\x35\x37\x38\x32\x5F\x79"]())))["\x73\x75\x62\x73\x74\x72"](0,3)/ 10000;if(_0x287dx16["\x64\x6F\x6F\x72\x4D\x6F\x76\x65\x4C"]/ 60> _0x287dx4b){doorLampL_ON["\x72\x65\x6E\x64\x65\x72"](renderer)}else {if(_0x287dx16["\x64\x6F\x6F\x72\x4D\x6F\x76\x65\x4C"]/ 60< _0x287dx4b){doorLampL_OFF["\x72\x65\x6E\x64\x65\x72"](renderer)}};if(_0x287dx16["\x64\x6F\x6F\x72\x4D\x6F\x76\x65\x52"]/ 60> _0x287dx4b){doorLampR_ON["\x72\x65\x6E\x64\x65\x72"](renderer)}else {if(_0x287dx16["\x64\x6F\x6F\x72\x4D\x6F\x76\x65\x52"]/ 60< _0x287dx4b){doorLampR_OFF["\x72\x65\x6E\x64\x65\x72"](renderer)}}}function renderController(_0x287dx16,_0x287dx4d){var _0x287dx17=_0x287dx16["\x67\x65\x74\x52\x65\x73\x6F\x75\x72\x63\x65\x53\x74\x61\x74\x65"]()["\x67\x65\x74\x44\x61\x74\x61\x4D\x61\x70"]();var _0x287dx2c=_0x287dx16["\x67\x65\x74\x4E\x6F\x74\x63\x68"]();var _0x287dx4e=_0x287dx16["\x67\x65\x74\x54\x72\x61\x69\x6E\x53\x74\x61\x74\x65\x44\x61\x74\x61"](10);var _0x287dx26=_0x287dx16["\x69\x73\x43\x6F\x6E\x74\x72\x6F\x6C\x43\x61\x72"]();roMc= _0x287dx17["\x67\x65\x74\x44\x6F\x75\x62\x6C\x65"]("\x72\x6F\x4D\x63\x44\x61\x74\x61");roBr= _0x287dx17["\x67\x65\x74\x44\x6F\x75\x62\x6C\x65"]("\x72\x6F\x42\x72\x44\x61\x74\x61");roRev= _0x287dx17["\x67\x65\x74\x44\x6F\x75\x62\x6C\x65"]("\x72\x6F\x52\x65\x76\x44\x61\x74\x61");var _0x287dx4f=16.0;var _0x287dx50=15.0;var _0x287dx51=40.0;if(_0x287dx4d){if(_0x287dx2c>= 0){var _0x287dx52=_0x287dx2c*  -_0x287dx4f}else {var _0x287dx52=0};if(roMc> _0x287dx52){roMc= roMc- (_0x287dx4f/ 2)}else {if(roMc< _0x287dx52){roMc= roMc+ (_0x287dx4f/ 2)}};if(_0x287dx2c<= 0){var _0x287dx53=_0x287dx2c*  -_0x287dx50}else {var _0x287dx53=0};if(roBr> _0x287dx53){roBr= roBr- (_0x287dx50/ 2)}else {if(roBr< _0x287dx53){roBr= roBr+ (_0x287dx50/ 2)}};if(_0x287dx4e== 0){var _0x287dx54=_0x287dx51}else {if(_0x287dx4e== 1){var _0x287dx54=0}else {if(_0x287dx4e== 2){var _0x287dx54=-_0x287dx51}}};if(roRev> _0x287dx54){roRev= roRev- (_0x287dx51/ 2)}else {if(roRev< _0x287dx54){roRev= roRev+ (_0x287dx51/ 2)}}};_0x287dx17["\x73\x65\x74\x44\x6F\x75\x62\x6C\x65"]("\x72\x6F\x4D\x63\x44\x61\x74\x61",roMc,false);_0x287dx17["\x73\x65\x74\x44\x6F\x75\x62\x6C\x65"]("\x72\x6F\x42\x72\x44\x61\x74\x61",roBr,false);_0x287dx17["\x73\x65\x74\x44\x6F\x75\x62\x6C\x65"]("\x72\x6F\x52\x65\x76\x44\x61\x74\x61",roRev,false);GL11["\x67\x6C\x50\x75\x73\x68\x4D\x61\x74\x72\x69\x78"]();renderer["\x72\x6F\x74\x61\x74\x65"](roMc,'\x58',0.0,0.8499,9.196);mcH["\x72\x65\x6E\x64\x65\x72"](renderer);GL11["\x67\x6C\x50\x6F\x70\x4D\x61\x74\x72\x69\x78"]();if(_0x287dx26){GL11["\x67\x6C\x50\x75\x73\x68\x4D\x61\x74\x72\x69\x78"]();renderer["\x72\x6F\x74\x61\x74\x65"](roBr,'\x59',0.3651,0.0,9.2528);brH["\x72\x65\x6E\x64\x65\x72"](renderer);GL11["\x67\x6C\x50\x6F\x70\x4D\x61\x74\x72\x69\x78"]()};GL11["\x67\x6C\x50\x75\x73\x68\x4D\x61\x74\x72\x69\x78"]();renderer["\x72\x6F\x74\x61\x74\x65"](roRev,'\x58',0.0000,0.8993,9.3183);revH["\x72\x65\x6E\x64\x65\x72"](renderer);GL11["\x67\x6C\x50\x6F\x70\x4D\x61\x74\x72\x69\x78"]()}function renderCab(_0x287dx16,_0x287dx4d){var _0x287dx26=_0x287dx16["\x69\x73\x43\x6F\x6E\x74\x72\x6F\x6C\x43\x61\x72"]();var _0x287dx56=_0x287dx16["\x67\x65\x74\x54\x72\x61\x69\x6E\x53\x74\x61\x74\x65\x44\x61\x74\x61"](11);if(!_0x287dx26&& _0x287dx56> 0){NGTUtilClient["\x67\x65\x74\x4D\x69\x6E\x65\x63\x72\x61\x66\x74"]()["\x66\x69\x65\x6C\x64\x5F\x37\x31\x34\x36\x30\x5F\x74"]["\x66\x75\x6E\x63\x5F\x37\x38\x34\x38\x33\x5F\x61"](0.0);GLHelper["\x73\x65\x74\x4C\x69\x67\x68\x74\x6D\x61\x70\x4D\x61\x78\x42\x72\x69\x67\x68\x74\x6E\x65\x73\x73"]()};if(Keyboard["\x69\x73\x4B\x65\x79\x44\x6F\x77\x6E"](Keyboard.KEY_P)){hornPedalON["\x72\x65\x6E\x64\x65\x72"](renderer)}else {hornPedalOFF["\x72\x65\x6E\x64\x65\x72"](renderer)};cab_body["\x72\x65\x6E\x64\x65\x72"](renderer);renderController(_0x287dx16,_0x287dx4d);renderATS(_0x287dx16);if(_0x287dx56> 0&&  !_0x287dx26){NGTUtilClient["\x67\x65\x74\x4D\x69\x6E\x65\x63\x72\x61\x66\x74"]()["\x66\x69\x65\x6C\x64\x5F\x37\x31\x34\x36\x30\x5F\x74"]["\x66\x75\x6E\x63\x5F\x37\x38\x34\x36\x33\x5F\x62"](0.0)}}function renderBodyGlass(_0x287dx16,_0x287dx14){var _0x287dx56=_0x287dx16["\x67\x65\x74\x54\x72\x61\x69\x6E\x53\x74\x61\x74\x65\x44\x61\x74\x61"](11);if(_0x287dx14== 1&& _0x287dx56> 0){NGTUtilClient["\x67\x65\x74\x4D\x69\x6E\x65\x63\x72\x61\x66\x74"]()["\x66\x69\x65\x6C\x64\x5F\x37\x31\x34\x36\x30\x5F\x74"]["\x66\x75\x6E\x63\x5F\x37\x38\x34\x38\x33\x5F\x61"](0.0);GLHelper["\x73\x65\x74\x4C\x69\x67\x68\x74\x6D\x61\x70\x4D\x61\x78\x42\x72\x69\x67\x68\x74\x6E\x65\x73\x73"]()};bodyGlass["\x72\x65\x6E\x64\x65\x72"](renderer);if(_0x287dx14== 1&& _0x287dx56> 0){NGTUtilClient["\x67\x65\x74\x4D\x69\x6E\x65\x63\x72\x61\x66\x74"]()["\x66\x69\x65\x6C\x64\x5F\x37\x31\x34\x36\x30\x5F\x74"]["\x66\x75\x6E\x63\x5F\x37\x38\x34\x36\x33\x5F\x62"](0.0)};cabGlass["\x72\x65\x6E\x64\x65\x72"](renderer);if(_0x287dx14== 1&& _0x287dx56> 0){NGTUtilClient["\x67\x65\x74\x4D\x69\x6E\x65\x63\x72\x61\x66\x74"]()["\x66\x69\x65\x6C\x64\x5F\x37\x31\x34\x36\x30\x5F\x74"]["\x66\x75\x6E\x63\x5F\x37\x38\x34\x36\x33\x5F\x62"](0.0)}}function renderCabGlass(_0x287dx16,_0x287dx14){var _0x287dx26=_0x287dx16["\x69\x73\x43\x6F\x6E\x74\x72\x6F\x6C\x43\x61\x72"]();var _0x287dx56=_0x287dx16["\x67\x65\x74\x54\x72\x61\x69\x6E\x53\x74\x61\x74\x65\x44\x61\x74\x61"](11);if(!_0x287dx26){if(_0x287dx14>= 2&& _0x287dx56> 0){NGTUtilClient["\x67\x65\x74\x4D\x69\x6E\x65\x63\x72\x61\x66\x74"]()["\x66\x69\x65\x6C\x64\x5F\x37\x31\x34\x36\x30\x5F\x74"]["\x66\x75\x6E\x63\x5F\x37\x38\x34\x38\x33\x5F\x61"](0.0);GLHelper["\x73\x65\x74\x4C\x69\x67\x68\x74\x6D\x61\x70\x4D\x61\x78\x42\x72\x69\x67\x68\x74\x6E\x65\x73\x73"]()};cabGlass["\x72\x65\x6E\x64\x65\x72"](renderer);if(_0x287dx14>= 2&& _0x287dx56> 0){NGTUtilClient["\x67\x65\x74\x4D\x69\x6E\x65\x63\x72\x61\x66\x74"]()["\x66\x69\x65\x6C\x64\x5F\x37\x31\x34\x36\x30\x5F\x74"]["\x66\x75\x6E\x63\x5F\x37\x38\x34\x36\x33\x5F\x62"](0.0)}}}function renderInterior(_0x287dx16){var _0x287dx56=_0x287dx16["\x67\x65\x74\x54\x72\x61\x69\x6E\x53\x74\x61\x74\x65\x44\x61\x74\x61"](11);if(_0x287dx56> 0){NGTUtilClient["\x67\x65\x74\x4D\x69\x6E\x65\x63\x72\x61\x66\x74"]()["\x66\x69\x65\x6C\x64\x5F\x37\x31\x34\x36\x30\x5F\x74"]["\x66\x75\x6E\x63\x5F\x37\x38\x34\x38\x33\x5F\x61"](0.0);GLHelper["\x73\x65\x74\x4C\x69\x67\x68\x74\x6D\x61\x70\x4D\x61\x78\x42\x72\x69\x67\x68\x74\x6E\x65\x73\x73"]()};GL11["\x67\x6C\x50\x75\x73\x68\x4D\x61\x74\x72\x69\x78"]();interior["\x72\x65\x6E\x64\x65\x72"](renderer);renderDoor_i(_0x287dx16);if(_0x287dx56> 0){NGTUtilClient["\x67\x65\x74\x4D\x69\x6E\x65\x63\x72\x61\x66\x74"]()["\x66\x69\x65\x6C\x64\x5F\x37\x31\x34\x36\x30\x5F\x74"]["\x66\x75\x6E\x63\x5F\x37\x38\x34\x36\x33\x5F\x62"](0.0)};GL11["\x67\x6C\x50\x6F\x70\x4D\x61\x74\x72\x69\x78"]()}function renderBogie(_0x287dx16){var _0x287dx5b=renderer["\x67\x65\x74\x57\x68\x65\x65\x6C\x52\x6F\x74\x61\x74\x69\x6F\x6E\x52"](_0x287dx16);var _0x287dx5c=_0x287dx16["\x66\x69\x65\x6C\x64\x5F\x37\x30\x31\x37\x37\x5F\x7A"];var _0x287dx5d=_0x287dx16["\x66\x69\x65\x6C\x64\x5F\x37\x30\x31\x32\x35\x5F\x41"];var _0x287dx5e=_0x287dx16["\x67\x65\x74\x42\x6F\x67\x69\x65"](0);var _0x287dx5f=_0x287dx16["\x67\x65\x74\x42\x6F\x67\x69\x65"](1);if(!_0x287dx5e||  !_0x287dx5f){return};var _0x287dx60=(_0x287dx5c- _0x287dx5e["\x66\x69\x65\x6C\x64\x5F\x37\x30\x31\x37\x37\x5F\x7A"])*  -1;var _0x287dx61=(_0x287dx5c- _0x287dx5f["\x66\x69\x65\x6C\x64\x5F\x37\x30\x31\x37\x37\x5F\x7A"])*  -1- 180;var _0x287dx62=_0x287dx5d- _0x287dx5e["\x66\x69\x65\x6C\x64\x5F\x37\x30\x31\x32\x35\x5F\x41"];var _0x287dx63=_0x287dx5d- _0x287dx5f["\x66\x69\x65\x6C\x64\x5F\x37\x30\x31\x32\x35\x5F\x41"]*  -1;var _0x287dx64=[6.5,-6.5];var _0x287dx65=-0.527;var _0x287dx66=[7.55,5.45,-5.45,-7.55];GL11["\x67\x6C\x50\x75\x73\x68\x4D\x61\x74\x72\x69\x78"]();renderer["\x72\x6F\x74\x61\x74\x65"](_0x287dx60,'\x59',0.0,0.0,_0x287dx64[0]);renderer["\x72\x6F\x74\x61\x74\x65"](_0x287dx62,'\x58',0.0,0.0,_0x287dx64[0]);bogieF["\x72\x65\x6E\x64\x65\x72"](renderer);GL11["\x67\x6C\x50\x75\x73\x68\x4D\x61\x74\x72\x69\x78"]();renderer["\x72\x6F\x74\x61\x74\x65"](_0x287dx5b,'\x58',0.0,_0x287dx65,_0x287dx66[0]);wheelF1["\x72\x65\x6E\x64\x65\x72"](renderer);GL11["\x67\x6C\x50\x6F\x70\x4D\x61\x74\x72\x69\x78"]();GL11["\x67\x6C\x50\x75\x73\x68\x4D\x61\x74\x72\x69\x78"]();renderer["\x72\x6F\x74\x61\x74\x65"](_0x287dx5b,'\x58',0.0,_0x287dx65,_0x287dx66[1]);wheelF2["\x72\x65\x6E\x64\x65\x72"](renderer);GL11["\x67\x6C\x50\x6F\x70\x4D\x61\x74\x72\x69\x78"]();GL11["\x67\x6C\x50\x6F\x70\x4D\x61\x74\x72\x69\x78"]();GL11["\x67\x6C\x50\x75\x73\x68\x4D\x61\x74\x72\x69\x78"]();renderer["\x72\x6F\x74\x61\x74\x65"](_0x287dx61,'\x59',0.0,0.0,_0x287dx64[1]);renderer["\x72\x6F\x74\x61\x74\x65"](_0x287dx63,'\x58',0.0,0.0,_0x287dx64[1]);bogieB["\x72\x65\x6E\x64\x65\x72"](renderer);GL11["\x67\x6C\x50\x75\x73\x68\x4D\x61\x74\x72\x69\x78"]();renderer["\x72\x6F\x74\x61\x74\x65"](_0x287dx5b,'\x58',0.0,_0x287dx65,_0x287dx66[2]);wheelB1["\x72\x65\x6E\x64\x65\x72"](renderer);GL11["\x67\x6C\x50\x6F\x70\x4D\x61\x74\x72\x69\x78"]();GL11["\x67\x6C\x50\x75\x73\x68\x4D\x61\x74\x72\x69\x78"]();renderer["\x72\x6F\x74\x61\x74\x65"](_0x287dx5b,'\x58',0.0,_0x287dx65,_0x287dx66[3]);wheelB2["\x72\x65\x6E\x64\x65\x72"](renderer);GL11["\x67\x6C\x50\x6F\x70\x4D\x61\x74\x72\x69\x78"]();GL11["\x67\x6C\x50\x6F\x70\x4D\x61\x74\x72\x69\x78"]()}function renderOtherParts(_0x287dx16){var _0x287dx68=_0x287dx16["\x67\x65\x74\x54\x72\x61\x69\x6E\x53\x74\x61\x74\x65\x44\x61\x74\x61"](0);var _0x287dx69=_0x287dx16["\x67\x65\x74\x54\x72\x61\x69\x6E\x53\x74\x61\x74\x65\x44\x61\x74\x61"](6);var _0x287dx6a=_0x287dx16["\x64\x6F\x6F\x72\x4D\x6F\x76\x65\x4C"]/ 60;var _0x287dx6b=_0x287dx16["\x64\x6F\x6F\x72\x4D\x6F\x76\x65\x52"]/ 60;if(_0x287dx68== 0){GL11["\x67\x6C\x50\x75\x73\x68\x4D\x61\x74\x72\x69\x78"]();headlighton["\x72\x65\x6E\x64\x65\x72"](renderer);taillightoff["\x72\x65\x6E\x64\x65\x72"](renderer);GL11["\x67\x6C\x50\x6F\x70\x4D\x61\x74\x72\x69\x78"]()}else {GL11["\x67\x6C\x50\x75\x73\x68\x4D\x61\x74\x72\x69\x78"]();headlightoff["\x72\x65\x6E\x64\x65\x72"](renderer);taillighton["\x72\x65\x6E\x64\x65\x72"](renderer);GL11["\x67\x6C\x50\x6F\x70\x4D\x61\x74\x72\x69\x78"]()};if(_0x287dx6a> 0|| _0x287dx6b> 0){cabDoorLampOFF["\x72\x65\x6E\x64\x65\x72"](renderer)}else {cabDoorLampON["\x72\x65\x6E\x64\x65\x72"](renderer)};if(_0x287dx69== 0){pantaDawn["\x72\x65\x6E\x64\x65\x72"](renderer)}else {pantaUp["\x72\x65\x6E\x64\x65\x72"](renderer)}}function render(_0x287dx16,_0x287dx14,_0x287dx6d){if(_0x287dx16== null){renderPreview(_0x287dx14);return};var _0x287dx4d=false;if(_0x287dx14== 0){_0x287dx4d= updateTick(_0x287dx16)};GL11["\x67\x6C\x50\x75\x73\x68\x4D\x61\x74\x72\x69\x78"]();if(_0x287dx16== null){entityID=  -1}else {entityID= _0x287dx16["\x66\x75\x6E\x63\x5F\x31\x34\x35\x37\x38\x32\x5F\x79"]();var _0x287dx19=renderer["\x67\x65\x74\x44\x61\x74\x61"](entityID<< prevTickID);var _0x287dx37=renderer["\x67\x65\x74\x54\x69\x63\x6B"](_0x287dx16);shouldUpdate= ((_0x287dx19!= _0x287dx37)&& (_0x287dx14== 0));if(shouldUpdate){renderer["\x73\x65\x74\x44\x61\x74\x61"](entityID<< prevTickID,_0x287dx37)};doorState= getArrayFromData(entityID<< doorStateID,2);doorMovement= getArrayFromData(entityID<< doorMovementID,2);doorStateInTrain= _0x287dx16["\x67\x65\x74\x54\x72\x61\x69\x6E\x53\x74\x61\x74\x65\x44\x61\x74\x61"](4);updateDoors(_0x287dx16)};if(_0x287dx14>= 0){body1["\x72\x65\x6E\x64\x65\x72"](renderer);body2["\x72\x65\x6E\x64\x65\x72"](renderer);body3["\x72\x65\x6E\x64\x65\x72"](renderer);longATSAlert(_0x287dx16,_0x287dx14);kitadenATS(_0x287dx16);renderBogie(_0x287dx16);renderOtherParts(_0x287dx16);sendHornKey(_0x287dx16);renderDoor_o(_0x287dx16);renderDoorLamp(_0x287dx16);renderCab(_0x287dx16,_0x287dx4d);renderCabGlass(_0x287dx16,_0x287dx14)};if(_0x287dx14>= 2){NGTUtilClient["\x67\x65\x74\x4D\x69\x6E\x65\x63\x72\x61\x66\x74"]()["\x66\x69\x65\x6C\x64\x5F\x37\x31\x34\x36\x30\x5F\x74"]["\x66\x75\x6E\x63\x5F\x37\x38\x34\x38\x33\x5F\x61"](0.0);GL11["\x67\x6C\x45\x6E\x61\x62\x6C\x65"](GL11.GL_BLEND);GL11["\x67\x6C\x42\x6C\x65\x6E\x64\x46\x75\x6E\x63"](GL11.GL_SRC_ALPHA,GL11.GL_ONE_MINUS_SRC_ALPHA);GL11["\x67\x6C\x43\x6F\x6C\x6F\x72\x34\x66"](1.0,1.0,1.0,1.0);GLHelper["\x73\x65\x74\x4C\x69\x67\x68\x74\x6D\x61\x70\x4D\x61\x78\x42\x72\x69\x67\x68\x74\x6E\x65\x73\x73"]()};renderInterior(_0x287dx16);renderBodyGlass(_0x287dx16,_0x287dx14);if(_0x287dx14>= 2){GL11["\x67\x6C\x44\x69\x73\x61\x62\x6C\x65"](GL11.GL_BLEND);GL11["\x67\x6C\x45\x6E\x61\x62\x6C\x65"](GL11.GL_ALPHA_TEST);NGTUtilClient["\x67\x65\x74\x4D\x69\x6E\x65\x63\x72\x61\x66\x74"]()["\x66\x69\x65\x6C\x64\x5F\x37\x31\x34\x36\x30\x5F\x74"]["\x66\x75\x6E\x63\x5F\x37\x38\x34\x36\x33\x5F\x62"](0.0)};GL11["\x67\x6C\x50\x6F\x70\x4D\x61\x74\x72\x69\x78"]()}