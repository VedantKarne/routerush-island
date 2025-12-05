# 🎨 Algorithms Implemented

This document provides detailed information about the pathfinding algorithms implemented in RouteRush Island.

---

## Dijkstra's Algorithm

Single-source shortest path algorithm using a priority queue. Optimal for non-negative weighted graphs.

**Time Complexity**: O((V + E) log V)

**How it works**:
1. Initialize distances from source to all vertices as infinite
2. Set distance to source as 0
3. Use a priority queue to always process the vertex with minimum distance
4. For each vertex, relax all adjacent edges
5. Continue until the destination is reached or all vertices are processed

**Best for**: Finding the shortest path in graphs with non-negative edge weights

**Learn more**: [Dijkstra's Algorithm on Wikipedia](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)

---

## Bidirectional Dijkstra

Runs Dijkstra's algorithm from both source and target simultaneously, meeting in the middle for faster results.

**Time Complexity**: O((V + E) log V) with reduced constant factors

**How it works**:
1. Run Dijkstra simultaneously from source (forward search) and destination (backward search)
2. Terminate when the two searches meet
3. Reconstruct the path by combining the forward and backward paths

**Advantages**:
- Faster in practice than standard Dijkstra
- Explores fewer vertices for point-to-point queries
- Still guarantees optimal solution

**Best for**: Point-to-point shortest path queries where you know both source and destination

**Learn more**: [Bidirectional Search on Wikipedia](https://en.wikipedia.org/wiki/Bidirectional_search)

---

## Bellman-Ford Algorithm

Single-source shortest path algorithm that handles negative edge weights and detects negative cycles.

**Time Complexity**: O(V × E)

**How it works**:
1. Initialize distances from source to all vertices as infinite
2. Set distance to source as 0
3. Relax all edges V-1 times
4. Check for negative cycles by attempting one more relaxation

**Advantages**:
- Can handle negative edge weights
- Detects negative cycles
- Simpler implementation than Dijkstra

**Disadvantages**:
- Slower than Dijkstra for graphs without negative weights

**Best for**: Graphs with negative edge weights, or when negative cycle detection is needed

**Learn more**: [Bellman-Ford Algorithm on Wikipedia](https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm)

---

## BMSSP-Inspired Shortest-Path Visualization

A visualization inspired by the **Bounded Multi-Source Shortest Paths (BMSSP)** algorithm, adapted for educational single-source/single-destination scenarios.

### Implementation Overview

This implementation includes:

- **Recursive exploration** with frontier shrinking
- **Bellman-Ford-style relaxations** for source-set reduction
- **Pivot selection** from the current frontier
- **Bounded Dijkstra** within distance thresholds

### Key Concepts

1. **Source Set Shrinking**: Reduces the set of active sources using Bellman-Ford-like relaxations
2. **Pivot Selection**: Chooses strategic pivot vertices from the frontier
3. **Bounded Search**: Runs Dijkstra-style search within a distance bound
4. **Recursive Divide-and-Conquer**: Breaks down the problem into smaller subproblems

### Educational Purpose

This implementation is designed to help users understand:
- Multi-source shortest path concepts
- Frontier-based search techniques
- Hybrid algorithm approaches
- Recursive algorithm design

> **Important**: See [BMSSP Technical Disclaimer](bmssp_disclaimer.md) for details about the limitations of this educational implementation.

---

## Visual Comparison

| Algorithm | Time Complexity | Negative Weights | Use Case |
|-----------|----------------|------------------|----------|
| Dijkstra | O((V + E) log V) | ❌ No | General shortest path |
| Bidirectional Dijkstra | O((V + E) log V)* | ❌ No | Point-to-point queries |
| Bellman-Ford | O(V × E) | ✅ Yes | Negative weights, cycle detection |
| BMSSP-Inspired | Varies | Depends | Educational visualization |

*With reduced constant factors

---

## Further Reading

- **Introduction to Algorithms** (CLRS) - Comprehensive algorithm textbook
- **Algorithm Design Manual** by Steven Skiena - Practical algorithm design
- **Competitive Programming** resources - Real-world algorithm applications

---

[← Back to README](../README.md)
