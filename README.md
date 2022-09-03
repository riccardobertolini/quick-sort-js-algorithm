# Quick-sort Algorithm JavaScript function

## What's the quick-sort algorithm?
Quicksort is a fast sorting algorithm that works by splitting a large array of data into smaller sub-arrays. This implies that each iteration works by splitting the input into two components, sorting them, and then recombining them.
It was created by Tony Hoare in 1961 and remains one of the most effective general-purpose sorting algorithms available today. It works by recursively sorting the sub-lists to either side of a given pivot and dynamically shifting elements inside the list around that pivot.

The goal here is to rearrange the list such that all the elements less than the pivot are towards the left of it, and all the elements greater than the pivot are towards the right of it.

- The pivot element is compared to all of the items starting with the first index. If the element is greater than the pivot element, a second pointer is appended.
-  When compared to other elements, if a smaller element than the pivot element is found, the smaller element is swapped with the larger element identified before.

Written in ES6 vanilla JavaScript
