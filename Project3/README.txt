Instructions for the elevator 'brain'.

Elevator A can go to Penthouse
Elevator B can go to Lobby

To stop any elevator use the proper sintax: ElevatorA.EmergencyStop(), ElevatorB.EmergencyStop()
To reset any elevator use the proper sintax: ElevatorA.Reset(), ElevatorB.Reset()

The closest elevator to the person will move towards them, then will move to the requested floor.
Finally will save the elevator.CurrentFloor as the current location.