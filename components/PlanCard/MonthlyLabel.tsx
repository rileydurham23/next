import Box from "components/Box";

interface MonthlyLabelProps {
  charge?: number;
}

export function MonthlyLabel({ charge }: MonthlyLabelProps) {
  const hasCharge = Boolean(charge);

  return (
    <Box color="gray" fontSize="text-sm" lineHeight={["12px", "sm"]} ml="2">
      {!hasCharge && (
        <Box as="span" display="block">
          starting at
        </Box>
      )}
      <Box as="span" display="block">
        {hasCharge ? "/month" : "node/month*"}
      </Box>
    </Box>
  );
}
