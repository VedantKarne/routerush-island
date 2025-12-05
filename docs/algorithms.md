# 🎨 Algorithms Implemented

This document describes the pathfinding algorithms implemented in RouteRush Island, along with the BMSSP-inspired performance simulator used for educational visualization.

---

## Dijkstra's Algorithm

Classic single-source shortest path algorithm for graphs with non-negative edge weights.

**Time Complexity**: O((V + E) log V)

**How it works**:

1. Initialize all distances to ∞
2. Set the source distance to 0
3. Use a priority queue to repeatedly select the closest unprocessed vertex
4. Relax all outgoing edges
5. Continue until all vertices are processed or the target is reached

**Best for**: Graphs with non-negative weights.

**Learn more**: [Dijkstra's Algorithm on Wikipedia](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)

---

## Bidirectional Dijkstra

Two Dijkstra searches—one forward from the source, one backward from the target—running simultaneously.

**Time Complexity**: O((V + E) log V) (same asymptotics, lower constants)

**How it works**:

1. Run Dijkstra from the source and target in parallel
2. Terminate when their frontiers meet
3. Combine the two partial paths to reconstruct the shortest path

**Advantages**:

- Much faster in practice for point-to-point routing
- Explores fewer nodes
- Still produces optimal shortest paths

**Best for**: Point-to-point navigation where both endpoints are known.

**Learn more**: [Bidirectional Search on Wikipedia](https://en.wikipedia.org/wiki/Bidirectional_search)

---

## Bellman–Ford Algorithm

A shortest-path algorithm that supports negative edge weights and detects negative cycles.

**Time Complexity**: O(V × E)

**How it works**:

1. Initialize all distances
2. Relax all edges V − 1 times
3. Perform a final relaxation pass to detect negative cycles

**Advantages**:

- Works when negative weights are present
- Detects negative cycles
- Conceptually simple

**Disadvantages**:

- Slow on large graphs
- Slower than Dijkstra when all edges are non-negative

**Best for**: Graphs where negative weights or cycle detection are relevant.

**Learn more**: [Bellman-Ford Algorithm on Wikipedia](https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm)

---

## BMSSP-Inspired Performance Simulator (Not an Algorithm Implementation)

RouteRush Island includes a feature inspired by the **Bounded Multi-Source Shortest Paths (BMSSP)** algorithm, but it is **not an implementation of BMSSP**.

Instead, it is a **didactic performance simulator** used to illustrate ideas such as frontier shrinking, bounded searches, and recursive behaviors.

### What the Simulator Actually Does

- Finds the real shortest path using **Bidirectional Dijkstra**
- Records timing/expansion data from the Dijkstra run
- Uses this data to **simulate BMSSP-like timing behavior**
- Provides a conceptual visualization of frontier reduction, pivots, and bounded search

### What Real BMSSP Contains (Not Included Here)

The actual BMSSP algorithm (Duan et al., 2025) involves:

- **Recursive frontier partitioning**
- **Pivot-based bounded Dijkstra**
- **True batch multi-source shortest-path queries**
- **O(m log^(2/3) n)** theoretical running time
- Specialized engineering for large-scale graphs

**None of these mechanisms are implemented in this project.**

### Educational Purpose

The simulator helps learners understand:

- High-level ideas behind modern shortest-path acceleration
- Why algorithms shrink frontiers or introduce bounds
- What recursive, divide-and-conquer structure looks like
- How multi-source ideas differ from classical SSSP

> **Important**: See the full [BMSSP Technical Disclaimer](bmssp_disclaimer.md).

---

## Visual Comparison

| Algorithm | Time Complexity | Negative Weights | Use Case |
|-----------|----------------|------------------|----------|
| **Dijkstra** | O((V + E) log V) | ❌ No | General shortest paths |
| **Bidirectional Dijkstra** | O((V + E) log V)* | ❌ No | Point-to-point routing |
| **Bellman-Ford** | O(V × E) | ✅ Yes | Negative weights + cycle detection |
| **BMSSP-Inspired Simulator** | N/A (not an algorithm) | N/A | Educational visualization only |

*Reduced constant factors compared to standard Dijkstra.

---

## Further Reading

- **Introduction to Algorithms (CLRS)** — Foundational reference
- **Algorithm Design Manual (Skiena)** — Intuition-focused approach
- **Competitive Programming 3** — Practical problem-solving

---

[← Back to README](../README.md)
