export function BuyButton() {
  return (
    <div className="purchase-actions">
      <button className="button" disabled>
        Get your copy · $24.99 ↗
      </button>
      <p className="notice">
        Checkout is unavailable in this preview.
      </p>
    </div>
  );
}
