function onUpdate(su) {

//↓コンプレッサー音の指定↓
var CompressorName = "RTMLib.CP.CPloop16";
var CompressorActiveName = "RTMLib.CP.CPstart16";
var CompressorEndName = "RTMLib.CP.CPend16";
//↑コンプレッサー音の指定↑

PlayCompressor(su,CompressorName,CompressorActiveName,CompressorEndName);
var speed = su.getSpeed(),
    notch = su.getNotch();

	//EB_Air
	if(notch === -8) {
		su.playSound('sound_krw', 'train.800EB', 1.0, 1.0, false);
	}

	else {
		su.stopSound('sound_krw', 'train.800EB');
	}

	//Breaker_On
	if(speed>0&&speed<60&& notch > 0) {
		su.playSound('sound_krw', 'train.800BcOn', 1.0, 1.0, false);
	}
	else{
		su.stopSound('sound_krw', 'train.800BcOn');
	}

	//Breaker_Off
	if(speed>0&&speed<60&& notch === 0) {
		su.playSound('sound_krw', 'train.800BcOff', 1.0, 1.0, false);
	}
	else{
		su.stopSound('sound_krw', 'train.800BcOff');
	}

	//Shock_On
	if(speed>0&&speed<90&& notch > 0) {
		su.playSound('sound_mhnlib', 'RTMLib.Sounds.201_Shock_Uniton', 1.0, 1.0, false);
	}
	else{
		su.stopSound('sound_mhnlib', 'RTMLib.Sounds.201_Shock_Uniton');
	}

	//Shock_Off
	if(speed>0&&speed<90&& notch === 0) {
		su.playSound('sound_mhnlib', 'RTMLib.Sounds.201_Shock_Unitoff', 1.0, 1.0, false);
	}
	else{
		su.stopSound('sound_mhnlib', 'RTMLib.Sounds.201_Shock_Unitoff');
	}

	if(speed>0.1){
		if(notch!=0){
			
				//Loop
				if(speed>0&&speed<180){
				var pit0 = 1.0,
						vol0 = 1.0;
				if(speed<0) vol0 = fadeCon(0, 1.0, 0, 1.0, su);
				if(speed>120) vol0 = fadeCon(180, 1.0, 180, 0.0, su);
				su.playSound('sound_mhnlib', 'RTMLib.loop.loop_16', vol0, pit0);
			}
			else{
				su.stopSound('sound_mhnlib', 'RTMLib.loop.loop_16');
			}

			//ch1
			if(speed>0&&speed<1 && notch > 0){
				var pit1 = 0.8,
						vol1 = 1.0;
				if(speed<2) vol1 = fadeCon(0, 0.0, 1, 1.0, su);
				su.playSound('sound_krw', 'train.ch0', vol1, pit1);
			}
			else{
				su.stopSound('sound_krw', 'train.ch0');
			}

			//ch2
			if(speed>1&&speed<6 && notch > 0){
				var pit2 = 0.8,
						vol2 = 1.0;
				su.playSound('sound_krw', 'train.ch1', vol2, pit2);
			}
			else{
				su.stopSound('sound_krw', 'train.ch1');
			}

			//ch2d
			if(speed>5&&speed<6 && notch < 0){
				var pit2d = 0.8,
						vol2d = 1.0;
				su.playSound('sound_krw', 'train.ch1d', vol2d, pit2d);
			}
			else{
				su.stopSound('sound_krw', 'train.ch1d');
			}

			//ch3
			if(speed>6&&speed<35 && notch > 0){
				var pit3 = 0.8,
						vol3 = 1.0;
				su.playSound('sound_krw', 'train.ch2', vol3, pit3);
			}
			else{
				su.stopSound('sound_krw', 'train.ch2');
			}

			//ch3d
			if(speed>6&&speed<70 && notch < 0){
				var pit3d = 0.8,
						vol3d = 1.0;
				if(speed>45) vol3d = fadeCon(45, 1.0, 70, 0.0, su);
				su.playSound('sound_krw', 'train.ch2d', vol3d, pit3d);
			}
			else{
				su.stopSound('sound_krw', 'train.ch2d');
			}

			//ch4
			if(speed>35&&speed<70 && notch > 0){
				var pit4 = 0.8,
						vol4 = 1.0;
				if(speed>45) vol4 = fadeCon(45, 1.0, 70, 0.0, su);
				su.playSound('sound_krw', 'train.ch3', vol4, pit4);
			}
			else{
				su.stopSound('sound_krw', 'train.ch3');
			}


		 }

//ここまでノッチオフ時に音OFF

		 else{
			 su.stopSound('sound_krw', 'train.ch0');
			 su.stopSound('sound_krw', 'train.ch1');
			 su.stopSound('sound_krw', 'train.ch1d');
			 su.stopSound('sound_krw', 'train.ch2');
			 su.stopSound('sound_krw', 'train.ch2d');
			 su.stopSound('sound_krw', 'train.ch3');
		 }

//ここよりノッチオフ時も音ON

			//run5
			if(speed>6&&speed<90){
				var pit5 = fadeCon(6, 0.6, 90, 1.3, su),
						vol5 = 1.0;
				if(speed<20) vol5 = fadeCon(6, 0.0, 20, 1.0, su);
				if(speed>70) vol5 = fadeCon(70, 1.0, 90, 0.0, su);
				su.playSound('sound_mhnlib', 'RTMLib.Run.201_Chopper.201_2', vol5, pit5);
			}
			else{
				su.stopSound('sound_mhnlib', 'RTMLib.Run.201_Chopper.201_2');
			}

			//run6
			if(speed>70&&speed<160){
				var pit6 = fadeCon(70, 0.75, 160, 1.8, su),
						vol6 = 1.0;
				if(speed<70) vol6 = fadeCon(70, 0.0, 90, 1.0, su);
				su.playSound('sound_mhnlib', 'RTMLib.Run.201_Chopper.201_3', vol6, pit6);
			}
			else{
				su.stopSound('sound_mhnlib', 'RTMLib.Run.201_Chopper.201_3');
			}

//EBの時音を消す構文
		 if(notch == -8){
			su.stopSound('sound_krw', 'train.ch0');
			su.stopSound('sound_krw', 'train.ch1');
			su.stopSound('sound_krw', 'train.ch1d');
			su.stopSound('sound_krw', 'train.ch2');
			su.stopSound('sound_krw', 'train.ch2d');
			su.stopSound('sound_krw', 'train.ch3');
			su.stopSound('sound_mhnlib', 'RTMLib.Run.201_Chopper.201_2');
			su.stopSound('sound_mhnlib', 'RTMLib.Run.201_Chopper.201_3');
			}

		//Run30km
		if(speed>0.1&&speed<60){
			var pit11 = fadeCon(0, 0.5, 30, 1.0, su),
					vol11 = 1.0;
			if(speed<10) vol11 = fadeCon(0, 0.0, 10, 1.0, su);
			if(speed>40) vol11 = fadeCon(40, 1.0, 60, 0.0, su);
			su.playSound('sound_mhnlib', 'RTMLib.Run.Common.Run30km2', vol11, pit11);
		}
		else{
			su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Run30km2');

		}

		//Run60km
		if (speed > 40 && speed < 90 && !su.inTunnel()) {
			var pit12 = fadeCon(60, 1.0, 90, 1.5, su),
					vol12 = 1.0;
								if (speed < 50) vol12 = fadeCon(40, 0.0, 50, 1.0, su);
								if (speed > 70) vol12 = fadeCon(70, 1.0, 90, 0.0, su);
								su.playSound('sound_mhnlib', 'RTMLib.Run.Common.Run60km2', vol12, pit12);
						} else {
								su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Run60km2');
						}

		//Run60kmT
						if (speed > 40 && speed < 90 && su.inTunnel()) {
								var pit13 = fadeCon(60, 1.0, 90, 1.5, su),
										vol13 = 1.0;
								if (speed < 50) vol13 = fadeCon(40, 0.0, 50, 1.0, su);
								if (speed > 70) vol13 = fadeCon(70, 1.0, 90, 0.0, su);
								su.playSound('sound_mhnlib', 'RTMLib.Run.Common.Run60kmT3', vol13, pit13);
						} else {
								su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Run60kmT3');
						}

						//Run120km
						if (speed > 70 && speed < 165 && !su.inTunnel()) {
								var pit14 = fadeCon(60, 0.5, 165, 1.6, su),
										vol14 = 1.0;
								if (speed < 80) vol14 = fadeCon(70, 0.0, 80, 1.0, su);
								su.playSound('sound_mhnlib', 'RTMLib.Run.Common.Run120km2', vol14, pit14);
						} else {
								su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Run120km2');
						}

						//Run120kmT
						if (speed > 70 && speed < 165 && su.inTunnel()) {
								var pit15 = fadeCon(60, 0.5, 165, 1.6, su),
										vol15 = 1.0;
								if (speed < 80) vol15 = fadeCon(70, 0.0, 80, 1.0, su);
								su.playSound('sound_mhnlib', 'RTMLib.Run.Common.Run120kmT', vol15, pit15);
						} else {
								su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Run120kmT');
						}

				}

				//全ての音を消す構文
				else {
						su.stopSound('sound_krw', 'train.ch0');
						su.stopSound('sound_krw', 'train.ch1');
						su.stopSound('sound_krw', 'train.ch1d');
						su.stopSound('sound_krw', 'train.ch2');
						su.stopSound('sound_krw', 'train.ch2d');
						su.stopSound('sound_krw', 'train.ch3');
						su.stopSound('sound_mhnlib', 'RTMLib.Run.201_Chopper.201_2');
						su.stopSound('sound_mhnlib', 'RTMLib.Run.201_Chopper.201_3');
						su.stopSound('sound_krw', 'train.800BcOn');
						su.stopSound('sound_krw', 'train.800BcOff');
						su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Run30km2');
						su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Run60km2');
						su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Run60kmT3');
						su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Run120km2');
						su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Run120kmT');
				}
		}

function PlayCompressor(su, CP, CPA, CPE) {
	if (su.isComplessorActive()) {
		su.playSound('sound_mhnlib', CPA, 0.6, 1, false);
		su.playSound('sound_mhnlib', CP, 0.6, 1);
		su.stopSound('sound_mhnlib', CPE);
	} else {
		su.stopSound('sound_mhnlib', CPA);
		su.stopSound('sound_mhnlib', CP);
		su.playSound('sound_mhnlib', CPE, 0.6, 1, false);
	}
}

//fadeCon(速度A,フェードA,速度B,フェードB,su);
//→速度A=フェードA、速度B=フェードBの直線の方程式に速度を当てた値を返す
//ボリュームやピッチに使用可能

function fadeCon(speed1, fade1, speed2, fade2, su) {
	var speed = su.getSpeed();
	return (((fade2 - fade1) / (speed2 - speed1)) * (speed - speed1)) + fade1;
}