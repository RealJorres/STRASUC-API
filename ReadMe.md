# API Documentation

Base URL: `http://localhost:3000/api/v1`

Authentication: Requires Bearer Token (JWT) for all POST, PUT, DELETE requests.

---

## University

**GET /universities**  
Get list of all universities.

**GET /universities/:id**  
Get a single university by ID.

**POST /universities**  
Create a new university.  
Request body:
```json
{
  "suc_name": "University of X",
  "suc_region": "Region Y"
}
```
Auto-generates acronym slug from `suc_name`.

**PUT /universities/:id**  
Update an existing university.  
Request body:
```json
{
  "suc_name": "Updated University Name",
  "suc_region": "Updated Region"
}
```

**DELETE /universities/:id**  
Delete a university.

---

## Sport

**GET /sports**  
Get all sports.

**GET /sports/:id**  
Get sport by ID.

**POST /sports**  
Create a new sport.  
Request body:
```json
{
  "sport_name": "Basketball",
  "sport_scoring_type": "points"
}
```

**PUT /sports/:id**  
Update a sport.  
Request body:
```json
{
  "sport_name": "Volleyball",
  "sport_scoring_type": "sets"
}
```

**DELETE /sports/:id**  
Delete a sport.

---

## Team

**GET /teams**  
Get list of all teams.

**GET /teams/:id**  
Get team by ID.

**POST /teams**  
Create a team.  
Request body:
```json
{
  "suc_id": 1,
  "sport_id": 2,
  "team_gender": "M"
}
```

**PUT /teams/:id**  
Update a team.  
Request body:
```json
{
  "suc_id": 1,
  "sport_id": 2,
  "team_gender": "F"
}
```

**DELETE /teams/:id**  
Delete a team.

---

## Match

**GET /matches**  
List all matches.

**GET /matches/:id**  
Get match by ID.

**POST /matches**  
Create a new match.  
Request body:
```json
{
  "sport_id": 1,
  "match_date_time": "2025-10-23T10:00:00",
  "match_venue": "Gym A",
  "match_status": "scheduled",
  "match_winner_id": null
}
```

**PUT /matches/:id**  
Update a match.  
Same structure as POST.

**DELETE /matches/:id**  
Delete a match.

---

## Score

**GET /scores**  
List all scores.

**GET /scores/:id**  
Get score by ID.

**POST /scores**  
Create a score record.  
Request body:
```json
{
  "match_id": 1,
  "team_id": 2,
  "score_value": 25,
  "period_number": 1
}
```

**PUT /scores/:id**  
Update a score record.  
Request body:
```json
{
  "score_value": 30,
  "period_number": 2
}
```

**DELETE /scores/:id**  
Delete a score record.

---

## Participant

**GET /participants**  
List all participants.

**GET /participants/:id**  
Get participant by ID.

**POST /participants**  
Add a participant.  
Request body:
```json
{
  "par_firstname": "Juan",
  "par_lastname": "Dela Cruz",
  "suc_id": 1,
  "sport_id": 2
}
```

**PUT /participants/:id**  
Update a participant.  
Request body:
```json
{
  "par_firstname": "Juan",
  "par_lastname": "Santos",
  "suc_id": 1,
  "sport_id": 2
}
```

**DELETE /participants/:id**  
Delete a participant.