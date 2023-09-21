#include <stdio.h>
#include <stdlib.h>
#define max 20

int m = 3;
int x[max];
void readgraph(int graph[][max], int n)
{
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n; j++)
        {
            graph[i][j] = 0;
        }
    }
    for (int i = 1; i <= n; i++)
    {
        int k = 1;
        printf("Enter the vertices joined to %d.: ", i);
        scanf("%d", &k);
        while (k != 0)
        {
            graph[i][k] = 1;
            scanf("%d", &k);
        }
    }
}
void print_it(int n)
{
    printf("The ans is:\n");
    for (int i = 1; i <= n; i++)
    {
        printf("Vertex %d's color = %d \n", i, x[i]);
    }
}

int validplace(int graph[][max], int i, int xk)
{
    for (int j = 1; j < i; j++)
    {
        if (graph[j][i] == 1)
        {
            if (x[j] == xk)
            {
                return 0;
            }
        }
    }
    return 1;
}

void mcolor(int graph[][max], int i, int n)
{
    for (int xk = 1; xk <= m; xk++)
    {
        if (validplace(graph, i, xk))
        {
            x[i] = xk;
            if (i == n)
            {
                print_it(n);
                exit(0);
            }
            else
            {
                mcolor(graph, i + 1, n);
            }
        }
    }
}

void display(int graph[][max], int n)
{
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n; j++)
        {
            printf("%d", graph[i][j]);
        }
        printf("\n");
    }
}
int main()
{
    int graph[max][max];
    printf("Enter the no. of vertices.:");
    int n;
    scanf("%d", &n);
    readgraph(graph, n);
    printf("Displaying Graph\n");
    display(graph, n);
    printf("Result:\n");
    mcolor(graph, 1, n);
    return 0;
}
