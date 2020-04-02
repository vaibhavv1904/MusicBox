// A graph input from https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/
/*
9 14
0 1 4
0 7 8
1 7 11
1 2 8
2 3 7
2 8 2
2 5 4
3 4 9
3 5 14
4 5 10
5 6 2
6 8 6
6 7 1
7 8 7
*/

#include <bits/stdc++.h>
using namespace std;
set <int> adj[100000];
class vertex {
public:
  int val;
  bool visited;
  int dist;
  int p;

  vertex ()
  {
    val = 0;
    visited = false;
    dist = INT_MAX;
    p = -1;
  }
};
class Graph{
public:
  int n;
  set <pair<int, int>> *adj; // For weighted graph
  vertex *v;
  Graph (int x)
  {
    n = x;
    adj = new set <pair<int, int>> [n+1]; // For weighted graph
    v = new vertex[n+1];

  }
  // set <int> *adj = new set<int> [n];


  void addEdge (int src, int dest, int w)
  {
    adj[src].insert( make_pair(dest, w) );
    adj[dest].insert( make_pair(src, w) );  // If undirected
  }

  void dfs (int src)
  {
    v[src].visited = 1;

    cout << src << " ";

    for (auto i : adj[src])
      if (v[i.first].visited == 0)
        dfs (i.first);
  }

  void bfs (int src)
  {
    v[src].visited = 1;
    queue <int> q;
    q.push(src);

    while (!q.empty())
    {
      int temp = q.front();
      q.pop();
      cout << temp << " ";
      for (auto i: adj[temp])
      if (v[i.first].visited == 0)
      {
        q.push(i.first);
        v[i.first].visited = 1;
      }
    }
  }
};

int main() {

    int n, e;
    cin >> n;
    cin >> e;
    Graph g(n);

  for (int i = 0; i < e ; i++)
    {
      int src, dest, w;
      cin >> src >> dest >> w;
      g.addEdge(src, dest, w);
    }
    g.bfs (0);
    return 0;
  }
