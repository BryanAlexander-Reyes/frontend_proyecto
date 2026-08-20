import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

interface FixtureMatch {
  id: string;
  teamA: string | null;
  teamB: string | null;
  winner: string | null;
  date?: string;
}

interface FixtureRound {
  title: string;
  matches: FixtureMatch[];
}

@Component({
  selector: 'app-fixture',
  imports: [DecimalPipe],
  templateUrl: './fixture.html',
  styleUrl: './fixture.css',
})
export class Fixture {
  readonly rounds: FixtureRound[] = [
    {
      title: 'Cuartos de final',
      matches: [
        { id: 'qf-1', teamA: 'Halcones FC', teamB: 'Titanes', winner: null, date: 'Sáb 24 Ago' },
        { id: 'qf-2', teamA: 'Dragones', teamB: 'Aurora', winner: null, date: 'Sáb 24 Ago' },
        { id: 'qf-3', teamA: 'Centauros', teamB: 'Raptors', winner: null, date: 'Dom 25 Ago' },
        { id: 'qf-4', teamA: 'Fénix', teamB: 'Lobos del Sur', winner: null, date: 'Dom 25 Ago' },
      ],
    },
    {
      title: 'Semifinales',
      matches: [
        { id: 'sf-1', teamA: null, teamB: null, winner: null, date: 'Sáb 31 Ago' },
        { id: 'sf-2', teamA: null, teamB: null, winner: null, date: 'Dom 1 Sep' },
      ],
    },
    {
      title: 'Final',
      matches: [{ id: 'f-1', teamA: null, teamB: null, winner: null, date: 'Sáb 7 Sep' }],
    },
  ];

  selectWinner(roundIndex: number, matchIndex: number, team: string | null): void {
    if (!team) return;

    const match = this.rounds[roundIndex].matches[matchIndex];
    match.winner = match.winner === team ? null : team;

    if (roundIndex < this.rounds.length - 1) {
      const nextMatch = this.rounds[roundIndex + 1].matches[Math.floor(matchIndex / 2)];
      const slot = matchIndex % 2 === 0 ? 'teamA' : 'teamB';
      nextMatch[slot] = match.winner;
      nextMatch.winner = null;
    }
  }

  resetFixture(): void {
    this.rounds.slice(0, -1).forEach((round) => {
      round.matches.forEach((match) => (match.winner = null));
    });
    this.rounds.slice(1).forEach((round) => {
      round.matches.forEach((match) => {
        match.teamA = null;
        match.teamB = null;
        match.winner = null;
      });
    });
  }
}
