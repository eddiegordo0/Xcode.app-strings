@(#)PROGRAM:com.apple.cts  PROJECT:libxpc-2235.0.25
distantFuture
timeIntervalSinceReferenceDate
interval
setBaseTime:
baseTime
delay
grace_period
name
startTime
setTempDelay:
setElapsedTime:
setStartTime:
tempDelay
eligibleTime
elapsedTime
loadBaseTime
advanceBaseTime
resetBaseTime
deadlineTime
markStarted:
markStopped:
totalElapsed
random_initial_delay
stringWithFormat:
description
token
setToken:
seqno
setSeqno:
setName:
connection
setConnection:
peer
setPeer:
unmanaged
setUnmanaged:
setInterval:
setDelay:
setGrace_period:
expected_duration
setExpected_duration:
setRandom_initial_delay:
state
setState:
eligible
setEligible:
das_eligible
setDas_eligible:
das_started
setDas_started:
bundle_id
setBundle_id:
related_applications
setRelated_applications:
involved_processes
setInvolved_processes:
runOnAppForeground
setRunOnAppForeground:
bgwake_count
setBgwake_count:
power_assertion
setPower_assertion:
setPid:
priority
setPriority:
requires_protection_class
setRequires_protection_class:
repeating
setRepeating:
requires_screen_sleep
setRequires_screen_sleep:
requires_significant_user_inactivity
setRequires_significant_user_inactivity:
allow_battery
setAllow_battery:
exclusive
setExclusive:
power_nap
setPower_nap:
app_refresh
setApp_refresh:
memory_intensive
setMemory_intensive:
cpu_intensive
setCpu_intensive:
disk_intensive
setDisk_intensive:
may_reboot_device
setMay_reboot_device:
post_install
setPost_install:
user_requested_backup_task
setUser_requested_backup_task:
requires_buddy_complete
setRequires_buddy_complete:
prevents_device_sleep
setPrevents_device_sleep:
requires_network_connectivity
setRequires_network_connectivity:
requires_inexpensive_network
setRequires_inexpensive_network:
expected_network_download_size_bytes
setExpected_network_download_size_bytes:
expected_network_upload_size_bytes
setExpected_network_upload_size_bytes:
network_endpoint
setNetwork_endpoint:
network_parameters
setNetwork_parameters:
communicates_with_paired_device
setCommunicates_with_paired_device:
desired_motion_state
setDesired_motion_state:
das_data
setDas_data:
schedule_rtc_wake
setSchedule_rtc_wake:
duet_power_budgeted
setDuet_power_budgeted:
data_budgeted
setData_budgeted:
bgtask_debug
setBgtask_debug:
confirmed_run
setConfirmed_run:
group_name
setGroup_name:
group_concurrency_limit
setGroup_concurrency_limit:
.cxx_destruct
_unmanaged
_eligible
_das_eligible
_das_started
_runOnAppForeground
_repeating
_requires_screen_sleep
_requires_significant_user_inactivity
_allow_battery
_exclusive
_power_nap
_app_refresh
_memory_intensive
_cpu_intensive
_disk_intensive
_may_reboot_device
_post_install
_user_requested_backup_task
_requires_buddy_complete
_prevents_device_sleep
_requires_network_connectivity
_requires_inexpensive_network
_communicates_with_paired_device
_schedule_rtc_wake
_duet_power_budgeted
_data_budgeted
_bgtask_debug
_confirmed_run
_bgwake_count
_power_assertion
_pid
_priority
_requires_protection_class
_token
_seqno
_name
_connection
_peer
_interval
_delay
_grace_period
_expected_duration
_random_initial_delay
_tempDelay
_baseTime
_startTime
_elapsedTime
_state
_bundle_id
_related_applications
_involved_processes
_expected_network_download_size_bytes
_expected_network_upload_size_bytes
_network_endpoint
_network_parameters
_desired_motion_state
_das_data
_group_name
_group_concurrency_limit
TQ,N,V_token
TQ,N,V_seqno
T@"NSString",&,N,V_name
T@"NSObject<OS_xpc_object>",&,N,V_connection
T@"NSObject<OS_xpc_object>",&,N,V_peer
TB,N,V_unmanaged
Tq,N,V_interval
Tq,N,V_delay
Tq,N,V_grace_period
Tq,N,V_expected_duration
Tq,N,V_random_initial_delay
Tq,N,V_tempDelay
Tq,N,V_baseTime
Tq,N,V_startTime
Tq,N,V_elapsedTime
Tq,N,V_state
TB,N,V_eligible
TB,N,V_das_eligible
TB,N,V_das_started
T@"NSString",&,N,V_bundle_id
T@"NSArray",&,N,V_related_applications
T@"NSArray",&,N,V_involved_processes
TB,N,V_runOnAppForeground
TI,N,V_bgwake_count
TI,N,V_power_assertion
Ti,N,V_pid
Ti,N,V_priority
Ti,N,V_requires_protection_class
TB,N,V_repeating
TB,N,V_requires_screen_sleep
TB,N,V_requires_significant_user_inactivity
TB,N,V_allow_battery
TB,N,V_exclusive
TB,N,V_power_nap
TB,N,V_app_refresh
TB,N,V_memory_intensive
TB,N,V_cpu_intensive
TB,N,V_disk_intensive
TB,N,V_may_reboot_device
TB,N,V_post_install
TB,N,V_user_requested_backup_task
TB,N,V_requires_buddy_complete
TB,N,V_prevents_device_sleep
TB,N,V_requires_network_connectivity
TB,N,V_requires_inexpensive_network
Tq,N,V_expected_network_download_size_bytes
Tq,N,V_expected_network_upload_size_bytes
T@"NSObject<OS_nw_endpoint>",&,N,V_network_endpoint
T@"NSObject<OS_nw_parameters>",&,N,V_network_parameters
TB,N,V_communicates_with_paired_device
Tr*,N,V_desired_motion_state
T@"NSObject<OS_xpc_object>",&,N,V_das_data
TB,N,V_schedule_rtc_wake
TB,N,V_duet_power_budgeted
TB,N,V_data_budgeted
TB,N,V_bgtask_debug
TB,N,V_confirmed_run
T@"NSString",&,N,V_group_name
TQ,N,V_group_concurrency_limit
UTF8String
removeObject:
initWithSuiteName:
arrayForKey:
mutableCopy
initWithCapacity:
addObject:
setObject:forKey:
copy
countByEnumeratingWithState:objects:count:
stringWithUTF8String:
stringForKey:
isEqualToString:
removeObjectForKey:
containsObject:
setDay:
setMonth:
setValue:forComponent:
isValidDate
month
minute
hour
weekday
setSecond:
calendar
date
nextDateAfterDate:matchingComponents:options:
init
setCalendar:
parseComponent:inEvent:
setEveryMinuteIfNothingElseSet
resetFireDate
initWithToken:andEvent:
identifier
components
fireDate
_identifier
_components
_fireDate
T@"NSString",R,N,V_identifier
T@"NSDateComponents",R,N,V_components
T@"NSDate",R,N,V_fireDate
calendarWithIdentifier:
numberWithUnsignedLongLong:
currentLocale
descriptionWithLocale:
objectForKey:
objectForKeyedSubscript:
compare:
earlierDate:
timeIntervalSinceNow
newBaseTime is less than interval+gracePeriod ago, moving forward for %{public}@
newBaseTime is greater than 2*interval from now, moving back for %{public}@
Using temporary delay of %lld seconds to account for late fire of %{public}@
Adding random initial delay %{public}d/%{public}d
Control channel connection: %d
evaluating activities
activity timer fired
%{public}@ state change %ld -> %ld
Initiating XPC Activity: %{public}@
Created temporary power assertion for %{public}@: %d
Deferring XPC Activity: %{public}@
Completed XPC Activity: %{public}@
Rescheduling XPC Activity: %{public}@
releasing power assertion: %d for %{public}@
XPC Activity client connection closed: %{public}@
Unregistered unmanaged XPC Activity: %{public}@
Running XPC Activity (PID %d): %{public}@
releasing temporary power assertion: %{public}@: %d
Scheduling activity timer for [%{public}@] in %lld seconds
activities are suspended
Activity %{public}@ is eligible to run.
Updating XPC Activity: %{public}@ (eligible=%s)
Updating XPC Activity (deferred): %{public}@ (eligible=%s)
Time Change: resubmitting actiivty %{public}@
No name in unmanaged activity request. Rejecting request.
Failed to register unmanaged XPC Activity: %{public}s
Created unmanaged XPC Activity: %{public}@
Registered unmanaged XPC Activity: %{public}@
%{public}s: %{public}s
%{public}@: permissible values for priority are %s or %s
%{public}@: postinstall activites are not allowed to repeat; interval property ignored.
%{public}@: postinstall activites are not allowed to repeat; repeating property ignored.
Control Channel: %{public}s %{public}s
Creating XPC Activity on XPC add event: %{public}s
Failed to create XPC Activity: %{public}s
Created XPC Activity: %{public}@
Registered XPC Activity: %{public}@
%{public}@: %{public}s
Unregistered XPC Activity on XPC remove event: %{public}@
The interval for key "%s" is not between %d and %d (inclusive).
Registered StartCalendarInterval: %{public}@: %{public}@
Unregistered StartCalendarInterval: %s
Running StartCalendarInterval: %{public}@
Rescheduling StartCalendarInterval: %{public}@: %{public}@
CTSActivityTime
CTSActivity
CTSCalendarInterval
v16@0:8
q16@0:8
v24@0:8q16
@16@0:8
Q16@0:8
v24@0:8Q16
v24@0:8@16
B16@0:8
v20@0:8B16
I16@0:8
v20@0:8I16
i16@0:8
v20@0:8i16
r*16@0:8
v24@0:8r*16
@"NSString"
@"NSObject<OS_xpc_object>"
@"NSArray"
@"NSObject<OS_nw_endpoint>"
@"NSObject<OS_nw_parameters>"
v32@0:8Q16@24
@32@0:8Q16@24
@"NSDateComponents"
@"NSDate"
ActivityBaseDates
com.apple.xpc.activity2
DateCompleted
DateSubmitted
v8@?0
TEMP:%s
AssertName
PlugInBundleID
com.apple.xpc.activity
AssertType
PreventUserIdleSystemSleep
TimeoutAction
TimeoutActionTurnOff
TimeoutSeconds
AssertLevel
%@ (%p)
Internal
Activities
com.apple.xpc.activity.unmanaged
v16@?0@"NSObject<OS_xpc_object>"8
com.apple.xpc.activity.control
com.apple.xpc.activity.debug.trigger
v12@?0i8
DisableSmartPowerNap
name
state
completion_status
eligible
VersionSpecificActivitiesRun
true
false
kern.osversion
ProductBuildVersion
Command
Identifier
List
Debug
Flags
Result
State
CheckIn
Wait
ConfirmedRun
Defer
Continue
Done
BaseTime
Eligible
Deadline
ElapsedTime
SequenceNumber
Interval
GracePeriod
Delay
Priority
Maintenance
Utility
AllowBattery
Repeating
PowerNap
AppRefresh
RequireProtectionClass
RequiresScreenSleep
RequiresSignificantUserInactivity
RequiresBuddyComplete
RequiresNetworkConnectivity
RequiresInexpensiveNetwork
CPUIntensive
MemoryIntensive
DiskIntensive
MayRebootDevice
PostInstall
DuetPowerBudgeting
UserRequestedBackup
Effective Criteria
ActivityGroupName
MaxConcurrencyLimit
<Unknown>
Month
Hour
Minute
Weekday
com.apple.launchd.calendarinterval
calendarinterval
