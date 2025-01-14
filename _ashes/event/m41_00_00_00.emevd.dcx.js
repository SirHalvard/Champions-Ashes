// ==EMEVD==
// @docs    ds3-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    DarkSouls3
// @string    N:\FDP\data\Param\event\common_func.emevd       
// @linked    [0]
// @version    3.3.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(14100000, 4101950, 5, 180, 0);
    RegisterBonfire(14100001, 4101951, 5, 180, 0);
    InitializeEvent(0, 14100100, 0);
    InitializeEvent(0, 14100101, 0);
    InitializeEvent(0, 14105500, 0);
    InitializeEvent(0, 14105200, 0);
    InitializeEvent(0, 14100800, 0);
    InitializeEvent(0, 14105810, 0);
    InitializeEvent(0, 14105811, 0);
    InitializeEvent(0, 14105812, 0);
    InitializeEvent(0, 14005829, 0);
    InitializeCommonEvent(20005840, 4101800);
    InitializeCommonEvent(20005841, 4101800);
    InitializeEvent(1, 14105520, 10012051, 4101521);
    InitializeEvent(2, 14105520, 10012052, 4101522);
    InitializeEvent(3, 14105520, 10012053, 4101523);
    InitializeEvent(4, 14105520, 10012054, 4101524);
    InitializeEvent(5, 14105520, 10012055, 4101525);
    InitializeCommonEvent(20005701, 14100800, 14104190, 14105190, 4100190, 4102190, 70000001);
    InitializeCommonEvent(20005720, 14104190, 14105190, 14100800, 4100190);
    InitializeCommonEvent(20005711, 14104190, 14105805, 4100190, 4102800, 4102805, 14100801);
    InitializeCommonEvent(20005713, 74000640, 14100800, 14104190, 14105190, 4100190);
    InitializeCommonEvent(20005714, 14104190, 14105805, 4100190, 4102806, 14100801);
    InitializeCommonEvent(20005701, 14100800, 14104191, 14105191, 4100191, 4102191, 70000003);
    InitializeCommonEvent(20005720, 14104191, 14105191, 14100800, 4100191);
    InitializeCommonEvent(20005711, 14104191, 14105805, 4100191, 4102800, 4102805, 14100801);
    InitializeCommonEvent(20005714, 14104191, 14105805, 4100191, 4102806, 14100801);
    InitializeCommonEvent(20005525, 54100010, 4100010, 4109100, 505);
});

$Event(50, Default, function() {
    SetMapSoundState(4104800, Disabled);
    SetMapSoundState(4104801, Disabled);
    SetMapSoundState(4104802, Disabled);
    SetEventFlag(14105100, OFF);
    InitializeEvent(0, 14105510, 0);
});

$Event(14100100, Default, function() {
    ActivateHit(4104101, Disabled);
    ChangeCharacterEnableState(4100100, Disabled);
    SetCharacterAnimationState(4100100, Disabled);
    SetEventFlag(74100100, OFF);
    SetEventFlag(100, OFF);
    EndIf(PlayerIsNotInOwnWorld());
    EndIf(AnyBatchEventFlags(9920, 9923));
    WaitFor(!EventFlag(50006020) && EventFlag(14101100));
    if (!EventFlag(14105100)) {
        CreateObjectfollowingSFX(4101100, 0, 30001);
    }
    WaitFor(
        !EventFlag(101)
            && HasMultiplayerState(MultiplayerState.LeavingSession)
            && ActionButtonInArea(9341, 4101100));
    DisplayGenericDialogAndSetEventFlags(10012020, PromptType.YESNO, NumberofOptions.TwoButtons, 4101100, 3, 100, 14105100, 14105100);
    RestartIf(!EventFlag(100));
    SetEventFlag(100, ON);
    SetEventFlag(101, OFF);
    SetSpEffect(10000, 4900);
    SetSpEffect(10000, 4901);
    SetCharacterImmortality(10000, Enabled);
    SetCharacterImmortality(4100100, Enabled);
    DeleteObjectfollowingSFX(4101100, true);
    ActivateHit(4104100, Disabled);
    ActivateHit(4104103, Enabled);
    WaitFixedTimeFrames(1);
    PlayOngoingCutsceneAndWarpPlayer(41000060, CutscenePlayMode.Skippable, 4102110, 41, 0, 10000, 0, 0);
    WaitFixedTimeFrames(1);
    ChangeCharacterEnableState(4100100, Enabled);
    SetCharacterAnimationState(4100100, Enabled);
    ForceAnimationPlayback(4100100, 30004, true, false, false, 0, 1);
    DeactivateObject(4101952, Disabled);
    ForceAnimationPlayback(10000, 0, false, false, false, 0, 1);
    ActivateHit(4104103, Disabled);
    ActivateHit(4104101, Enabled);
    ActivateHit(4104102, Enabled);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(4100100, 30004, true, false, false, 0, 1);
    WaitFor(OngoingCutsceneFinished(4102110));
    dmg = HasDamageType(4100100, 10000, DamageType.Unspecified);
    WaitFor(dmg || ElapsedSeconds(10));
    if (!dmg.Passed) {
        SetEventFlag(74100100, ON);
    }
    SetSpEffect(10000, 4902);
    if (!dmg.Passed) {
        WaitFixedTimeSeconds(4.2);
        AwardAchievement(2);
        DisableLoadingScreenTips(true);
        HideHud(true);
        SetNetworkInteractionState(Enabled);
        SetEventFlag(110, ON);
        SetEventFlag(9922, ON);
        SetEventFlag(22, ON);
        SetEventFlag(6400, ON);
        ClearSpEffect(10000, 4902);
        EndEvent();
    }
L0:
    PlayCutsceneToPlayer(41000070, CutscenePlayMode.Unskippable, 10000);
    WaitFixedTimeFrames(1);
    HideHud(true);
    SetNetworkInteractionState(Enabled);
    DisableLoadingScreenTips(true);
    SetEventFlag(110, ON);
    SetEventFlag(9923, ON);
    SetEventFlag(23, ON);
    SetEventFlag(6400, ON);
    ClearSpEffect(10000, 4902);
    EndEvent();
});

$Event(14100101, Default, function() {
    SetEventFlag(101, OFF);
    EndIf(PlayerIsNotInOwnWorld());
    EndIf(AnyBatchEventFlags(9920, 9923));
    WaitFor(EventFlag(14101100));
    DeactivateObject(4101952, Enabled);
    ForceAnimationPlayback(4101952, 11, true, false, false, 0, 1);
    WaitFor(
        !EventFlag(100)
            && HasMultiplayerState(MultiplayerState.LeavingSession)
            && ActionButtonInArea(9342, 4101952));
    DisplayGenericDialogAndSetEventFlags(10012021, PromptType.YESNO, NumberofOptions.TwoButtons, 4101952, 3, 101, 14105101, 14105101);
    RestartIf(!EventFlag(101));
    SetEventFlag(101, ON);
    SetEventFlag(100, OFF);
    ForceAnimationPlayback(4101952, 1, false, false, false, 0, 1);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 490, 9230, 4);
    WaitFixedTimeFrames(1);
    if (EventValue(9230, 4) != 8) {
        PlayCutsceneToPlayer(41000000, CutscenePlayMode.Unskippable, 10000);
        WaitFixedTimeFrames(1);
        AwardAchievement(1);
        DisableLoadingScreenTips(true);
        SetEventFlag(9920, ON);
        SetEventFlag(20, ON);
        SetEventFlag(110, ON);
        SetEventFlag(6400, ON);
        EndEvent();
    }
L0:
    if (EventFlag(9013)) {
        PlayCutsceneToPlayer(41000050, CutscenePlayMode.Unskippable, 10000);
    } else {
        PlayCutsceneToPlayer(41000051, CutscenePlayMode.Unskippable, 10000);
    }
    WaitFixedTimeFrames(1);
    AwardAchievement(3);
    DisableLoadingScreenTips(true);
    SetEventFlag(9921, ON);
    SetEventFlag(21, ON);
    SetEventFlag(110, ON);
    SetEventFlag(6400, ON);
    EndEvent();
});

$Event(14105520, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(ActionButtonInArea(9356, X4_4));
    DisplayGenericDialog(X0_4, PromptType.OKCANCEL, NumberofOptions.OneButton, X4_4, 3);
    WaitFixedTimeSeconds(3);
    RestartEvent();
});

$Event(14105500, Default, function() {
    WaitFor(ActionButtonInArea(9343, 4101101));
    RotateCharacter(10000, 4101101, 91040, false);
    WaitFixedTimeSeconds(3);
    WarpPlayer(41, 0, 4100120);
});

$Event(14105510, Restart, function() {
    DeactivateObject(4106102, Disabled);
    EndIf(!EventFlag(14100511));
    DeactivateObject(4106102, Enabled);
    EndIf(PlayerIsNotInOwnWorld());
    if (!EventFlag(14100512)) {
        SetEventFlag(14100512, ON);
    }
    WaitFor(
        !PlayerIsNotInOwnWorld()
            && HasMultiplayerState(MultiplayerState.LeavingSession)
            && ActionButtonInArea(9344, 4101102));
    SendAllPhantomsHome(0);
    RotateCharacter(10000, 4101102, 91040, false);
    WaitFixedTimeSeconds(3);
    WarpPlayer(50, 0, 5002110);
    SetEventFlag(14100510, ON);
});

$Event(14105200, Restart, function() {
    ChangeCharacterEnableState(4100200, Disabled);
});

$Event(14100800, Default, function() {
    EndIf(EventFlag(14100800));
    WaitFor(HPRatio(4100800) <= 0);
    WaitFixedTimeSeconds(3);
    PlaySE(4100800, SoundType.s_SFX, 777777777);
    WaitFor(CharacterDead(4100800));
    HandleBossDefeatAndDisplayBanner(4100800, TextBannerType.LordofCinderFallen);
    SetEventFlag(14100800, ON);
    SetEventFlag(14101100, ON);
    SetEventFlag(9321, ON);
    SetEventFlag(6321, ON);
    SpawnOneshotSFX(TargetEntityType.Object, 4101952, 200, 1060);
});

$Event(14105810, Restart, function() {
    if (EventFlag(14100800)) {
        ForceCharacterDeath(4100800, false);
        ChangeCharacterEnableState(4100800, Disabled);
        SetCharacterAIState(4100800, Disabled);
        EndEvent();
    }
L0:
    SetCharacterAIState(4100800, Disabled);
    if (!EventFlag(14100801)) {
        onlineAreaFlag &= !PlayerIsNotInOwnWorld() && EntityInRadiusOfEntity(4100800, 10000, 40, 1);
        WaitFor(onlineAreaFlag);
        SetNetworkconnectedEventFlag(14100801, ON);
        ForceAnimationPlayback(4100800, 1700, false, true, false, 0, 1);
    } else {
L1:
        onlineAreaFlag &= EventFlag(14105805) && InArea(10000, 4102800);
        WaitFor(onlineAreaFlag);
    }
L2:
    SetNetworkconnectedEventFlag(14100801, ON);
    SetNetworkconnectedEventFlag(14105807, ON);
    SetCharacterAIState(4100800, Enabled);
    DisplayBossHealthBar(Enabled, 4100800, 0, 905280);
    SetNetworkUpdateRate(4100800, true, CharacterUpdateFrequency.AlwaysUpdate);
    EndIf(PlayerIsNotInOwnWorld());
    SetNetworkUpdateAuthority(4100800, AuthorityLevel.Forced);
});

$Event(14105811, Restart, function() {
    EndIf(EventFlag(14100800));
    EndIf(EventFlag(14105802));
    SetCharacterImmortality(4100800, Enabled);
    WaitFor(HPRatio(4100800) <= 0.05 && HasDamageType(4100800, 10000, DamageType.Unspecified));
    SetNetworkconnectedEventFlag(14105803, ON);
    ForceAnimationPlayback(4100800, 20010, false, true, false, 0, 1);
    ForceAnimationPlayback(4100800, 20005, false, true, false, 0, 1);
    SetNetworkconnectedEventFlag(14105802, ON);
    SetCharacterImmortality(4100800, Disabled);
});

$Event(14105812, Restart, function() {
    EndIf(EventFlag(14100800));
    if (!EventFlag(14100801)) {
        if (!EventFlag(14100801)) {
            ForceAnimationPlayback(4100800, 700, false, false, false, 0, 1);
        }
    }
L0:
    WaitFor(ObjectBackread(4101952));
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(4101952, 100000, false, false, false, 0, 1);
});

$Event(14105813, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    SetNetworkSyncState(Disabled);
    SetMapSoundState(X16_4, Disabled);
    SetMapSoundState(X20_4, Disabled);
    EndIf(EventFlag(X0_4));
    flagArea &= EventFlag(X4_4);
    if (NumberOfClientsOfType(ClientType.Coop) != 0) {
        flagArea &= EventFlag(X8_4);
    }
    flagArea &= InArea(10000, X12_4);
    WaitFor(flagArea);
    EnableBossMapSound(X16_4, Enabled);
    Unknown201007(X20_4);
    WaitFor(EventFlag(X24_4) || EventFlag(X0_4));
    if (!EventFlag(X0_4)) {
        EnableBossMapSound(X20_4, Enabled);
        WaitFor(EventFlag(X0_4));
    }
L0:
    EnableBossMapSound(-1, Disabled);
});

$Event(14005829, Restart, function() {
    InitializeCommonEvent(20005800, 14100800, 4101800, 4102800, 14105805, 4101800, 4100800, 14100801, 0);
    InitializeCommonEvent(20005801, 14100800, 4101800, 4102800, 14105805, 4101800, 14105806);
    if (NumberOfClientsOfType(ClientType.Invader) != 0) {
        InitializeCommonEvent(20001836, 14100800, 14105805, 14105806, 14105807, 4104800, 4104801, 14105802);
    } else {
        InitializeCommonEvent(20005831, 14100800, 14105805, 14105806, 4102800, 4104800, 4104801, 14105802);
    }
    InitializeCommonEvent(20005820, 14100800, 4101800, 4, 14100801);
    InitializeCommonEvent(20005810, 14100800, 4101800, 4102800, 10000);
});

$Event(14005900, Restart, function() {
    SetEventFlag(74000120, ON);
    SetEventFlag(14101100, ON);
    ClearSpEffect(10000, 4900);
    ClearSpEffect(10000, 4901);
    SetNetworkInteractionState(Enabled);
    HideHud(true);
    WaitFor(EventFlag(100) || EventFlag(101));
    ChangeCharacterEnableState(4100800, Disabled);
    SetCharacterAnimationState(4100800, Disabled);
});


